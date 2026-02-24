import streamlit as st
import os
import uuid
import pandas as pd
from db import save_structured_records_to_mongodb, get_db
from core import parse_result_file, get_available_departments
from datetime import datetime, UTC
from core import get_current_log_filename


# ---------------- PAGE CONFIG ---------------- #

st.set_page_config(
    page_title="Upload Result PDF",
    page_icon="📄",
    layout="wide",
    initial_sidebar_state="expanded"
)

st.markdown("## 📄 Upload University Result PDF")
st.caption("Upload the official university result PDF to start processing")

#---------------------WARNING-------------------------#

st.warning(
    "⚠️ Uploaded PDFs and generated results are temporary.\n\n"
    "Your data will be **permanently deleted** if you:\n"
    "- Reload the page\n"
    "- Upload a new PDF\n"
    "- Close the browser window"
)


#---------------UI STYLING----------------------------#

st.markdown("""
<style>
    .block-container {
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        max-width: 900px;
    }

    .hint {
        color: #9da5b4;
        font-size: 0.95rem;
        margin-bottom: 1.5rem;
    }

    .step-card {
        background-color: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 14px;
        padding: 18px;
        height: 100%;
    }

    .step-title {
        font-weight: 600;
        margin-bottom: 6px;
    }

    .step-text {
        color: #c9d1d9;
        font-size: 0.9rem;
    }
</style>
""", unsafe_allow_html=True)


# ---------------- PATHS ---------------- #

UPLOAD_DIR = "uploads"
OUTPUT_DIR = "outputs"

os.makedirs(UPLOAD_DIR, exist_ok=True)
os.makedirs(OUTPUT_DIR, exist_ok=True)

# ---------------- SESSION STATE ---------------- #

st.session_state.setdefault("pdf_path", None)
st.session_state.setdefault("departments", [])

# ---------------- FILE UPLOAD ---------------- #

st.markdown(
    "<div class='hint'>Only official university result PDFs are supported.</div>",
    unsafe_allow_html=True
)

uploaded_file = st.file_uploader(
    "Upload Result PDF",
    type=["pdf", "csv", "xlsx"],
    help="Upload only official university-issued result PDFs"
)


if uploaded_file:

    # 🔥 New upload = new session → clean old files
    for folder in ["uploads", "outputs"]:
        if os.path.exists(folder):
            for file in os.listdir(folder):
                os.remove(os.path.join(folder, file))

    # 🔥 Clear previous result data (NEW SESSION)
    st.session_state.pop("current_df", None)
    st.session_state.pop("current_department", None)

    file_id = uuid.uuid4().hex
    pdf_name = f"{file_id}_{uploaded_file.name}"
    pdf_path = os.path.join(UPLOAD_DIR, pdf_name)

    with open(pdf_path, "wb") as f:
        f.write(uploaded_file.read())

    st.success("✅ File uploaded successfully")

    st.session_state.pdf_path = pdf_path

    file_extension = uploaded_file.name.split(".")[-1].lower()
    st.session_state.file_type = file_extension

    if file_extension == "pdf":
        st.caption("Departments will be detected automatically. Choose what to process below.")
    else:
        st.caption("Structured file detected. Ready to process.")




    # -------- PARSE IMMEDIATELY TO FIND DEPARTMENTS -------- #
    file_extension = st.session_state.file_type

    if file_extension == "pdf":
        with st.status("🔄 Scanning departments in PDF...", expanded=False):
            departments = get_available_departments(pdf_path)

        if not departments:
            st.error("No departments found in the uploaded PDF")
        else:
            st.session_state.departments = departments
    else:
        st.session_state.departments = ["STRUCTURED FILE"]

# ---------------- DEPARTMENT DROPDOWN ---------------- #

if st.session_state.departments:
    options = st.session_state.departments  # no need for ALL DEPARTMENTS now

    selected_option = st.selectbox(
        "Select Department to Process",
        options
    )

    st.divider()

    if st.button("Process Result"):

        with st.status("🔄 Processing Result...", expanded=False):

            file_extension = st.session_state.get("file_type")
            pdf_path = st.session_state.get("pdf_path")

            if file_extension == "pdf":
                department_name = selected_option
                headers, matrix_data, semester = parse_result_file(
                    pdf_path,
                    department_name
                )
            else:
                department_name = "STRUCTURED FILE"
                headers, matrix_data, semester = parse_result_file(pdf_path)

            if not matrix_data:
                st.error("No valid student data found.")
                st.stop()

            rows = []

            for student in matrix_data:
                row = {
                    "Register No": student["reg_no"]
                }

                for subject, info in student["subjects"].items():
                    row[subject] = info["grade"]

                rows.append(row)

            df = pd.DataFrame(rows)

            output_file = department_name.replace(" ", "_") + ".csv"
            output_path = os.path.join(OUTPUT_DIR, output_file)
            df.to_csv(output_path, index=False)

            upload_id = f"{department_name}_S{semester}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

            save_structured_records_to_mongodb(
                matrix_data,
                department_name,
                semester=semester,
                upload_id=upload_id
            )
            # Save upload metadata
            db = get_db()

            db["Uploads_Metadata"].insert_one({
                "upload_id": upload_id,
                "department": department_name,
                "semester": semester,
                "uploaded_at": datetime.now(UTC),
                "total_students": len(matrix_data),
                "file_name": uploaded_file.name,
                "log_file": get_current_log_filename()
            })

            st.session_state["current_department"] = department_name
            st.session_state["current_df"] = df

        st.success("✅ Processing completed successfully")
        st.caption("Redirecting to Result Analysis page...")

        import time
        time.sleep(1)

        st.switch_page("pages/2-result.py")



