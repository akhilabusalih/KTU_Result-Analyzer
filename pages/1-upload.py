import streamlit as st
import os
import uuid
from datetime import datetime, UTC

from utils.db import save_structured_records_to_mongodb, get_db
from core import process_result_file
from utils.parser import extract_text_from_pdf, detect_departments
from utils.student_filter import filter_students_by_batch

st.write("DEBUG MODE:", st.session_state.get("mode"))

# --------------------------------------------------
# DUPLICATE DATASET DIALOG
# --------------------------------------------------

@st.dialog("⚠ Dataset Already Exists")
def confirm_overwrite(existing_data):
    st.warning(
        f"Data for {existing_data['department']} | "
        f"S{existing_data['semester']} | "
        f"{existing_data['batch']} already exists."
    )

    col1, col2 = st.columns(2)

    if col1.button("Cancel"):
        st.session_state.overwrite = False
        st.rerun()

    if col2.button("Overwrite"):
        st.session_state.overwrite = True
        st.rerun()


# --------------------------------------------------
# PAGE CONFIG
# --------------------------------------------------

st.set_page_config(
    page_title="Upload Result PDF",
    page_icon="📄",
    layout="wide",
    initial_sidebar_state="expanded"
)

st.markdown("## 📄 Upload University Result PDF")
st.caption("Upload the official university result PDF to start processing")

st.warning(
    "⚠️ Uploaded PDFs and generated results are temporary.\n\n"
    "Your data will be permanently deleted if you:\n"
    "- Reload the page\n"
    "- Upload a new PDF\n"
    "- Close the browser window"
)
# --------------------------------------------------
# MODE SELECTION
# --------------------------------------------------

mode = st.radio(
    "Select Mode",
    ["Public", "Private"],
    horizontal=True
)
st.session_state.mode = mode

# --------------------------------------------------
# PATHS
# --------------------------------------------------

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


# --------------------------------------------------
# SESSION STATE INIT
# --------------------------------------------------

st.session_state.setdefault("pdf_path", None)
st.session_state.setdefault("available_departments", [])
st.session_state.setdefault("start_processing", False)


# --------------------------------------------------
# FILE UPLOAD
# --------------------------------------------------

uploaded_file = st.file_uploader(
    "Upload Result PDF",
    type=["pdf"],
    help="Upload only official university-issued result PDFs"
)

if uploaded_file:
    st.session_state["uploaded_filename"] = uploaded_file.name

    # Clear previous uploads
    for file in os.listdir(UPLOAD_DIR):
        os.remove(os.path.join(UPLOAD_DIR, file))

    file_id = uuid.uuid4().hex
    pdf_name = f"{file_id}_{uploaded_file.name}"
    pdf_path = os.path.join(UPLOAD_DIR, pdf_name)

    with open(pdf_path, "wb") as f:
        f.write(uploaded_file.read())

    st.success("✅ File uploaded successfully")

    st.session_state.pdf_path = pdf_path

    full_text = extract_text_from_pdf(pdf_path)
    departments = detect_departments(full_text)

    st.session_state.available_departments = departments


# --------------------------------------------------
# DEPARTMENT SELECTION
# --------------------------------------------------

if st.session_state.get("pdf_path"):

    st.session_state.department_name = st.selectbox(
        "Select Department",
        st.session_state.available_departments
    )

    if st.button("Process Result"):
        st.session_state.start_processing = True


# --------------------------------------------------
# MAIN PROCESSING LOGIC
# --------------------------------------------------

if st.session_state.get("start_processing"):

    db = get_db()

    # ---------------- PARSE PDF ---------------- #

    headers, processed_students, semester, detected_batch = process_result_file(
        st.session_state.pdf_path,
        st.session_state.department_name,
        db
    )

    if not processed_students:
        st.error("No valid student data found.")
        st.session_state.start_processing = False
        st.stop()

    # ---------------- BATCH EXTRACTION ---------------- #

    admission_year = processed_students[0].get("admission_year")
    batch = processed_students[0].get("batch")

    # ---------------- DUPLICATE CHECK ---------------- #

    existing = db["Uploads_Metadata"].find_one({
        "department": st.session_state.department_name,
        "semester": semester,
        "batch": batch
    })

    if existing and "overwrite" not in st.session_state:
        st.session_state.existing_data = existing
        confirm_overwrite(existing)
        st.stop()

    if "overwrite" in st.session_state:

        if st.session_state.overwrite:
            existing_data = st.session_state.get("existing_data")

            if existing_data:
                old_upload_id = existing_data.get("upload_id")
            else:
                old_upload_id = None

            # 🔥 SAFE DELETE ONLY IF VALID ID EXISTS
            if old_upload_id:
                db["Uploads_Metadata"].delete_one({"upload_id": old_upload_id})

                if mode == "Public":
                    db["Result_Public"].delete_many({"upload_id": old_upload_id})
                else:
                    db["Result_Private"].delete_many({"upload_id": old_upload_id})

        else:
            # Cancel processing
            st.session_state.start_processing = False
            del st.session_state.overwrite
            del st.session_state.existing_data
            st.stop()

        del st.session_state.overwrite
        del st.session_state.existing_data
    # ---------------- SAVE DATA ---------------- #

    upload_id = f"{st.session_state.department_name}_S{semester}_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

    with st.status("🔄 Processing Result...", expanded=True):

        save_structured_records_to_mongodb(
            processed_students,
            st.session_state.department_name,
            semester=semester,
            upload_id=upload_id,
            mode= mode
        )

        db["Uploads_Metadata"].insert_one({
            "upload_id": upload_id,
            "department": st.session_state.department_name,
            "semester": semester,
            "admission_year": admission_year,
            "batch": batch,
            "uploaded_at": datetime.now(UTC),
            "total_students": len(processed_students),
            "file_name": st.session_state.get("uploaded_filename")
        })

    # Reset processing flag
    st.session_state.start_processing = False

    st.success("✅ Processing completed successfully")

    # --------------------------------------------------
    # PREPARE DATA FOR CHATBOT
    # --------------------------------------------------

    import pandas as pd

    if mode == "Public":
        result_data = list(db["Result_Public"].find(
            {"upload_id": upload_id},
            {"_id": 0}
        ))
    else:
        result_data = list(db["Result_Private"].find(
            {"upload_id": upload_id},
            {"_id": 0}
        ))
    if result_data:
        students_df = pd.DataFrame(result_data)

        # Dynamically detect subject columns
        subjects = [
            col for col in students_df.columns
            if col not in [
                "Register No", "CGPA",
                "upload_id", "department",
                "semester", "admission_year", "batch"
            ]
        ]

        st.session_state["DEPT"] = {
            "name": st.session_state.department_name,
            "students": students_df,
            "subjects": subjects,
            "loaded": True
        }

    # --------------------------------------------------

    st.session_state["last_upload_id"] = upload_id
    st.session_state["mode"] = mode
    st.session_state["detected_batch"] = detected_batch

    st.switch_page("pages/2-result.py")