import streamlit as st
import pandas as pd
from utils.db import get_db

st.title("Subject Configuration")

db = get_db()
collection = db["Subject_Grade"]

# --------------------------------------------------
# FETCH SUBJECT DATA
# --------------------------------------------------

subjects = list(collection.find({}, {"_id": 0}))

if not subjects:
    st.warning("No subjects found in database.")
    st.stop()

df = pd.DataFrame(subjects)

# --------------------------------------------------
# NORMALIZE COLUMN NAMES (DB → UI)
# --------------------------------------------------

df = df.rename(columns={
    "subject_code": "Subject Code",
    "subject_name": "Subject Name",
    "department": "Department",
    "semester": "Semester",
    "scheme_year": "Scheme Year",
    "credit": "Credit"
})

# --------------------------------------------------
# VALIDATE REQUIRED COLUMNS
# --------------------------------------------------

required_columns = [
    "Subject Code",
    "Subject Name",
    "Department",
    "Semester",
    "Scheme Year",
    "Credit"
]

missing_cols = [col for col in required_columns if col not in df.columns]

if missing_cols:
    st.error(f"Missing columns in Subject_Grade collection: {missing_cols}")
    st.stop()

# --------------------------------------------------
# SUMMARY CARDS
# --------------------------------------------------

total_subjects = len(df)
total_departments = df["Department"].nunique()
total_semesters = df["Semester"].nunique()

# Academic years derived from scheme_year
total_years = df["Scheme Year"].nunique()

col1, col2, col3, col4 = st.columns(4)

col1.info(f"### 📘 {total_subjects}\nTotal Subjects")
col2.success(f"### 🏫 {total_departments}\nDepartments")
col3.warning(f"### 📅 {total_semesters}\nSemesters")
col4.error(f"### 📆 {total_years}\nAcademic Years")

# --------------------------------------------------
# FILTER BAR
# --------------------------------------------------

col1, col2, col3 = st.columns([1.5, 1, 1])

with col1:
    search_query = st.text_input(
        "🔍 Search Subject",
        placeholder="Enter subject code or subject name..."
    )

with col2:
    dept_filter = st.selectbox(
        "Department",
        ["All"] + sorted(df["Department"].dropna().unique().tolist())
    )

with col3:
    sem_filter = st.selectbox(
        "Semester",
        ["All"] + sorted(df["Semester"].dropna().unique().tolist())
    )

# --------------------------------------------------
# APPLY FILTERS
# --------------------------------------------------

filtered_df = df.copy()

if search_query:
    filtered_df = filtered_df[
        filtered_df["Subject Code"].str.contains(search_query, case=False, na=False) |
        filtered_df["Subject Name"].str.contains(search_query, case=False, na=False)
    ]

if dept_filter != "All":
    filtered_df = filtered_df[filtered_df["Department"] == dept_filter]

if sem_filter != "All":
    filtered_df = filtered_df[filtered_df["Semester"] == sem_filter]

# --------------------------------------------------
# EDITABLE TABLE
# --------------------------------------------------

edited_df = st.data_editor(
    filtered_df,
    num_rows="dynamic",
    use_container_width=True
)

# --------------------------------------------------
# SAVE BUTTON
# --------------------------------------------------

if st.button("Save Changes"):

    original_data = list(collection.find({}, {"_id": 0}))
    original_df = pd.DataFrame(original_data)

    original_df = original_df.rename(columns={
        "subject_code": "Subject Code"
    })

    edited_records = edited_df.to_dict("records")

    # ---------------- UPDATE OR INSERT ----------------

    for row in edited_records:

        collection.update_one(
            {"subject_code": row["Subject Code"]},
            {
                "$set": {
                    "subject_code": row["Subject Code"],
                    "subject_name": row["Subject Name"],
                    "department": row["Department"],
                    "semester": row["Semester"],
                    "scheme_year": row["Scheme Year"],
                    "credit": row["Credit"]
                }
            },
            upsert=True
        )

    # ---------------- DELETE REMOVED SUBJECTS ----------------

    edited_codes = set(edited_df["Subject Code"])
    original_codes = set(original_df["Subject Code"])

    deleted_codes = original_codes - edited_codes

    for code in deleted_codes:
        collection.delete_one({"subject_code": code})

    st.success("Subject configuration updated successfully.")