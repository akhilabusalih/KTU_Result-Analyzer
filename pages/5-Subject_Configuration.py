import streamlit as st
import pandas as pd
from db import get_db

st.title("Subject Configuration")

db = get_db()
collection = db["Subject_Grade"]

# Fetch subjects
subjects = list(collection.find({}, {"_id": 0}))

if not subjects:
    st.warning("No subjects found in database.")
    st.stop()

df = pd.DataFrame(subjects)

# ---------------- SUMMARY CARDS ---------------- #

total_subjects = len(df)
total_departments = df["Department"].nunique()
total_semesters = df["Semester"].nunique()
total_years = df["Year"].nunique()
year_list = sorted(df["Year"].dropna().unique().tolist())

col1, col2, col3, col4 = st.columns(4)

with col1:
    st.info(f"### 📘 {total_subjects}\nTotal Subjects")

with col2:
    st.success(f"### 🏫 {total_departments}\nDepartments")

with col3:
    st.warning(f"### 📅 {total_semesters}\nSemesters")

with col4:
    with col4:
        st.error(
            f"### 📆 {total_years} ({', '.join(map(str, year_list))})\nAcademic Years"
        )


# ---------------- FILTER BAR ---------------- #

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
# ---------------- APPLY FILTERS ---------------- #

if search_query:
    df = df[
        df["Subject Code"].str.contains(search_query, case=False, na=False) |
        df["Subject Name"].str.contains(search_query, case=False, na=False)
    ]

if dept_filter != "All":
    df = df[df["Department"] == dept_filter]

if sem_filter != "All":
    df = df[df["Semester"] == sem_filter]
# ---------------- EDITABLE TABLE ---------------- #

edited_df = st.data_editor(
    df,
    num_rows="dynamic",
    use_container_width=True
)

# ---------------- SAVE BUTTON ---------------- #

if st.button("Save Changes"):

    # Fetch original data from DB again
    original_data = list(collection.find({}, {"_id": 0}))
    original_df = pd.DataFrame(original_data)

    edited_records = edited_df.to_dict("records")

    # ---------------- UPDATE OR INSERT ---------------- #
    for row in edited_records:
        collection.update_one(
            {"Subject Code": row["Subject Code"]},
            {"$set": row},
            upsert=True
        )

    # ---------------- DELETE REMOVED ROWS ---------------- #
    edited_codes = set(edited_df["Subject Code"])
    original_codes = set(original_df["Subject Code"])

    deleted_codes = original_codes - edited_codes

    for code in deleted_codes:
        collection.delete_one({"Subject Code": code})

    st.success("Subject configuration updated successfully.")