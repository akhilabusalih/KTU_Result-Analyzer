import streamlit as st
import pandas as pd
from utils.db import get_db
from utils.student_service import (
    validate_student_dataframe,
    upsert_students,
    upsert_single_student,
    filter_students,
    get_batches_with_departments,
    get_dashboard_counts,
    delete_student,
    get_all_students)


# --------------------------------------------------
# PAGE CONFIG
# --------------------------------------------------
st.set_page_config(
    page_title="Student Management",
    layout="wide",
    initial_sidebar_state="collapsed"
)

st.title("👨‍🎓 Student Management Dashboard")

db = get_db()

# --------------------------------------------------
# HELPER FUNCTIONS (using service)
# --------------------------------------------------
def get_batches():
    """Return list of (batch, department) tuples using service."""
    items = get_batches_with_departments(db)
    return [(item["batch"], item["department"]) for item in items]

def get_counts():
    """Return (total_students, total_batches) using service."""
    counts = get_dashboard_counts(db)
    return counts["total_students"], counts["total_batches"]

# --------------------------------------------------
# MAIN CONTENT – TABS
# --------------------------------------------------
tab1, tab2, tab3, tab4 = st.tabs(["📊 Overview", "📤 Upload CSV", "✏️ Manual Entry", "🗑️ Delete Student"])

# ---------- TAB 1: OVERVIEW ----------
with tab1:
    st.subheader("📊 Dashboard Overview")

    col1, col2 = st.columns(2)
    total_students, total_batches = get_counts()
    col1.metric("Total Students", total_students)
    col2.metric("Total Batches", total_batches)

    st.subheader("📚 Existing Batches")
    batches = get_batches()
    if batches:
        batch_df = pd.DataFrame(batches, columns=["Batch", "Department"])
        st.dataframe(batch_df, use_container_width=True)
    else:
        st.info("No batch data available")

    st.subheader("🔍 Filter Students")
    # Get unique batches and departments from existing data
    if batches:
        unique_batches = sorted(set(b[0] for b in batches))
        unique_depts = sorted(set(b[1] for b in batches))
    else:
        unique_batches = []
        unique_depts = []

    col_f1, col_f2 = st.columns(2)
    with col_f1:
        batch_filter = st.selectbox("Batch", options=["All"] + unique_batches)
    with col_f2:
        dept_filter = st.selectbox("Department", options=["All"] + unique_depts)

    # Build filter parameters
    batch = None if batch_filter == "All" else batch_filter
    department = None if dept_filter == "All" else dept_filter

    filtered_students = filter_students(db, batch=batch, department=department)

    if filtered_students:
        st.write("Filtered Results")
        st.dataframe(pd.DataFrame(filtered_students), use_container_width=True)
    else:
        st.warning("No matching students found")

# ---------- TAB 2: UPLOAD CSV ----------
with tab2:
    st.subheader("📤 Upload Student CSV")
    with st.expander("📄 Instructions", expanded=False):
        st.markdown("""
        **CSV/Excel must contain exactly these columns:**
        - Register No
        - Name
        - Department
        - Scheme Year
        """)

    batch_input = st.text_input("Enter Batch (e.g., 2023-2027)", placeholder="e.g., 2023-2027")
    uploaded_file = st.file_uploader("Choose a CSV or Excel file", type=["csv", "xlsx"])

    if uploaded_file:
        try:
            if uploaded_file.name.endswith(".csv"):
                df = pd.read_csv(uploaded_file)
            else:
                df = pd.read_excel(uploaded_file)

            st.success("File loaded successfully ✅")
            missing_cols = validate_student_dataframe(df)

            if missing_cols:
                st.error(f"Missing required columns: {missing_cols}")
            elif not batch_input:
                st.warning("Please enter batch before saving")
            else:
                st.write("**Preview Data**")
                st.dataframe(df.head(), use_container_width=True)

                if st.button("💾 Save Students", type="primary"):
                    success = upsert_students(db, df, batch_input)
                    st.success(f"{success} students uploaded successfully 🎉")
        except Exception as e:
            st.error(f"Error processing file: {str(e)}")

# ---------- TAB 3: MANUAL ENTRY ----------
with tab3:
    st.subheader("✏️ Add / Update Single Student")

    col1, col2 = st.columns(2)
    with col1:
        reg_no = st.text_input("Register No", placeholder="e.g., CMA23CS050")
        name = st.text_input("Name", placeholder="Full name")
        dept = st.text_input("Department", placeholder="e.g., CSE")
    with col2:
        scheme = st.text_input("Scheme Year", placeholder="e.g., 2023")
        batch_manual = st.text_input("Batch", placeholder="e.g., 2023-2027")

    if st.button("Save Student Manually", type="primary"):
        if not all([reg_no, name, dept, scheme, batch_manual]):
            st.error("All fields are required ❗")
        else:
            student_data = {
                "reg_no": reg_no,
                "name": name,
                "department": dept,
                "scheme_year": scheme,
                "batch": batch_manual
            }
            upsert_single_student(db, student_data)
            st.success("Student saved successfully ✅")

# ---------- TAB 4: DELETE STUDENT ----------
with tab4:
    st.subheader("🗑️ Delete Student")

    all_students = get_all_students(db)  # we need this function – add it to service
    if all_students:
        reg_options = {s["reg_no"]: f"{s['reg_no']} - {s['name']}" for s in all_students}
        selected_reg = st.selectbox("Select student to delete", options=[""] + list(reg_options.keys()), format_func=lambda x: reg_options.get(x, "Select a student"))

        if selected_reg:
            if st.button("Delete Selected Student", type="secondary"):
                if delete_student(db, selected_reg):
                    st.success(f"Student {selected_reg} deleted successfully")
                else:
                    st.error("Student not found")
    else:
        st.info("No students available to delete")

    st.write("---")
    st.write("Or enter Register No manually:")
    delete_reg = st.text_input("Register No to delete", placeholder="e.g., CMA23CS050")
    if st.button("Delete Student by Register No"):
        if not delete_reg:
            st.warning("Enter Register No")
        else:
            if delete_student(db, delete_reg):
                st.success(f"Student {delete_reg} deleted")
            else:
                st.error("Student not found")