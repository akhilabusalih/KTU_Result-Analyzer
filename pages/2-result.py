import streamlit as st
from utils.db import get_db
import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from utils.report_generator import (
    generate_excel_report,
    generate_pdf_report,
    generate_html_report,
)
import uuid
from datetime import datetime
from utils.report_auth import generate_qr_code, save_report_metadata
from utils.db import get_db

db = get_db()


def generate_report_id(department):
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    uid = str(uuid.uuid4())[:6]
    return f"RPT-{department}-{timestamp}-{uid}"


# --------------------------------------------------
# PAGE CONFIG
# --------------------------------------------------

st.set_page_config(
    page_title="Result Analysis",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

st.title("📊 Result Analysis")

# --------------------------------------------------
# MODE & BATCH INFO
# --------------------------------------------------

mode = st.session_state.get("mode", "Public")
detected_batch = st.session_state.get("detected_batch")

info_col1, info_col2 = st.columns(2)

with info_col1:
    st.info(f"Mode: {mode}")

with info_col2:
    if mode == "Private" and detected_batch:
        st.success(f"Detected Batch: {detected_batch}")

if mode == "Private":
    st.caption("Filtered result: Only students from detected batch are included (arrear students removed)")


# --------------------------------------------------
# SESSION VALIDATION
# --------------------------------------------------

if "last_upload_id" not in st.session_state:
    st.warning("No result data available.")
    st.info("Please upload and process a result PDF first.")
    st.stop()

upload_id = st.session_state["last_upload_id"]

db = get_db()

if mode == "Public":
    students = list(db["Result_Public"].find({"upload_id": upload_id}))
else:
    students = list(db["Result_Private"].find({"upload_id": upload_id}))

reg_nos = [s["reg_no"] for s in students]

student_map = {
    s["reg_no"]: s["name"]
    for s in db["Student_data"].find({"reg_no": {"$in": reg_nos}})
}

if not students:
    st.warning("No result data found for this upload.")
    st.stop()

department = students[0]["department_name"]


# --------------------------------------------------
# BUILD STUDENT DATAFRAME
# --------------------------------------------------

rows = []

for student in students:

    if mode == "Private":
        identifier = student_map.get(student["reg_no"], student["reg_no"])
        id_label = "Student Name"
    else:
        identifier = student["reg_no"]
        id_label = "Register No"

    row = {id_label: identifier}

    for subject in student.get("subjects", []):
        row[subject["subject_code"]] = subject["grade"]

    row["SGPA"] = student.get("SGPA")

    rows.append(row)

df = pd.DataFrame(rows)

# Move SGPA to last column
if "SGPA" in df.columns:
    cols = [c for c in df.columns if c != "SGPA"] + ["SGPA"]
    df = df[cols]

# --------------------------------------------------
# CALCULATE ARREARS
# --------------------------------------------------

grade_columns = [
    col for col in df.columns
    if col not in [id_label, "SGPA"]
]

def count_arrears(row):
    arrears = 0

    for col in grade_columns:
        grade = row.get(col)

        if pd.isna(grade) or grade is None:
            continue

        grade = str(grade).strip().upper()

        if grade in ["F", "FE", "ABSENT"]:
            arrears += 1

    return arrears

df["Arrear"] = df.apply(count_arrears, axis=1)

arrear_col = df.pop("Arrear")
df["Arrear"] = arrear_col


# --------------------------------------------------
# SAVE CSV
# --------------------------------------------------

os.makedirs("outputs", exist_ok=True)

output_file = f"{department.replace(' ','_')}_results.csv"
output_path = os.path.join("outputs", output_file)

df.to_csv(output_path, index=False)


# --------------------------------------------------
# BASIC METRICS
# --------------------------------------------------

subjects = [
    col for col in df.columns
    if col not in [id_label, "SGPA", "Arrear"]
]

total_students = len(df)
total_subjects = len(subjects)

avg_sgpa = round(df["SGPA"].mean(), 2)
max_sgpa = round(df["SGPA"].max(), 2)
min_sgpa = round(df["SGPA"].min(), 2)

st.markdown("## 📊 Result Overview")

col1, col2, col3, col4, col5 = st.columns(5)

col1.metric("Total Students", total_students)
col2.metric("Subjects", total_subjects)
col3.metric("Average SGPA", avg_sgpa)
col4.metric("Highest SGPA", max_sgpa)
col5.metric("Lowest SGPA", min_sgpa)


# --------------------------------------------------
# SUBJECT ANALYSIS
# --------------------------------------------------

st.markdown("## 📘 Subject Performance Analysis")

analysis_rows = []

fail_grades = ["F", "FE", "Absent"]

for subject in subjects:

    total = len(df)

    pass_count = df[~df[subject].isin(fail_grades)].shape[0]
    fail_count = df[df[subject].isin(fail_grades)].shape[0]

    pass_percent = round((pass_count / total) * 100, 2)

    grade_counts = df[subject].value_counts().to_dict()

    row = {
        "Subject": subject,
        "Pass %": pass_percent,
        "Pass Count": pass_count,
        "Fail Count": fail_count,
        "S": grade_counts.get("S", 0),
        "A+": grade_counts.get("A+", 0),
        "A": grade_counts.get("A", 0),
        "B+": grade_counts.get("B+", 0),
        "B": grade_counts.get("B", 0),
        "C+": grade_counts.get("C+", 0),
        "C": grade_counts.get("C", 0),
        "D": grade_counts.get("D", 0),
        "P": grade_counts.get("P", 0),
        "F": grade_counts.get("F", 0)
    }

    analysis_rows.append(row)

analysis_df = pd.DataFrame(analysis_rows)

st.dataframe(analysis_df, use_container_width=True)


# --------------------------------------------------
# CHARTS
# --------------------------------------------------

st.markdown("## 📈 Visual Analysis")

col1, col2 = st.columns(2)

with col1:
    st.markdown("### Pass vs Fail")

    fig = plt.figure(figsize=(6,4))
    x = np.arange(len(analysis_df["Subject"]))
    width = 0.35

    plt.bar(x - width/2, analysis_df["Pass Count"], width)
    plt.bar(x + width/2, analysis_df["Fail Count"], width)

    plt.xticks(x, analysis_df["Subject"], rotation=45)
    plt.title("Pass vs Fail Count")
    plt.legend(["Pass","Fail"])
    plt.tight_layout()

    st.pyplot(fig)

with col2:
    st.markdown("### Grade Distribution")

    grade_columns_chart = ["S","A+","A","B+","B","C+","C","D","P","F"]

    fig2 = plt.figure(figsize=(6,4))
    bottom_values = np.zeros(len(analysis_df["Subject"]))

    for grade in grade_columns_chart:
        values = analysis_df[grade]
        plt.bar(analysis_df["Subject"], values, bottom=bottom_values)
        bottom_values += values

    plt.xticks(rotation=45)
    plt.title("Grade Distribution")
    plt.legend(grade_columns_chart, fontsize=7, ncol=5)
    plt.tight_layout()

    st.pyplot(fig2)


# --------------------------------------------------
# STUDENT PREVIEW
# --------------------------------------------------

st.markdown("## 🔍 Student Result Preview")
st.dataframe(df, use_container_width=True, height=500)


# --------------------------------------------------
# OVERALL PERFORMANCE
# --------------------------------------------------

st.markdown("## 📗 Overall Student Performance")

failed_students = df[(df[subjects] == "F").any(axis=1)]

total_failed = len(failed_students)
total_passed = total_students - total_failed

pass_percent_regular = round((total_passed / total_students) * 100, 2)

col1, col2, col3 = st.columns(3)

col1.metric("Total Students", total_students)
col2.metric("Students with Backlog", total_failed)
col3.metric("Pass %", f"{pass_percent_regular}%")


# --------------------------------------------------
# TOPPERS
# --------------------------------------------------

st.markdown("## 🏆 Top Performers")

if mode == "Public":
    top_students = list(
        db["Result_Public"]
        .find({"upload_id": upload_id})
        .sort("SGPA", -1)
        .limit(3)
    )
else:
    top_students = list(
        db["Result_Private"]
        .find({"upload_id": upload_id})
        .sort("SGPA", -1)
        .limit(3)
    )

for student in top_students:

    sgpa = round(student.get("SGPA",0),2)

    if mode == "Private":
        name = student_map.get(student["reg_no"], student["reg_no"])
        st.write(f"**{name}** — SGPA: {sgpa}")
    else:
        st.write(f"**{student['reg_no']}** — SGPA: {sgpa}")


# --------------------------------------------------
# EXPORT
# --------------------------------------------------

st.markdown("## 📤 Export Report")

header_info = {
    "university": "APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY",
    "exam_centre": department,
    "exam_title": "Result Analysis Report"
}

col1, col2, col3 = st.columns(3)

_sem = students[0].get("semester", "")

if mode == "Private" and detected_batch:
    _batch = detected_batch
else:
    _batch = students[0].get("batch", "")

with col1:
    if st.button("📊 Export Excel"):
        report_id = generate_report_id(department)
        qr_path = generate_qr_code(report_id)
        file_path = generate_excel_report(
            df, analysis_df,
            f"outputs/{department}_Report.xlsx",
            report_id, qr_path,
            department=department, semester=_sem, batch=_batch, mode=mode, db=db
        )
        save_report_metadata(db, report_id, department, file_path, "EXCEL")
        with open(file_path, "rb") as f:
            st.download_button("Download Excel", f, file_name=f"{department}_Report.xlsx")

with col2:
    if st.button("📄 Export PDF"):
        report_id = generate_report_id(department)
        qr_path = generate_qr_code(report_id)
        file_path = generate_pdf_report(
            df, analysis_df,
            f"outputs/{department}_Report.pdf",
            report_id, qr_path,
            department=department, semester=_sem, batch=_batch, mode=mode, db = db
        )
        save_report_metadata(db, report_id, department, file_path, "PDF")
        with open(file_path, "rb") as f:
            st.download_button("Download PDF", f, file_name=f"{department}_Report.pdf")

with col3:
    if st.button("🌐 Export HTML"):
        report_id = generate_report_id(department)
        qr_path = generate_qr_code(report_id)
        html_content = generate_html_report(
            df=df, analysis_df=analysis_df,
            report_id=report_id, department=department,
            semester=_sem, batch=_batch, qr_path=qr_path,mode=mode, db = db
        )
        save_report_metadata(db, report_id, department,
                             f"outputs/{department}_Report.html", "HTML")
        st.download_button(
            label="Download HTML",
            data=html_content.encode("utf-8"),
            file_name=f"{department}_Report.html",
            mime="text/html",
        )


# --------------------------------------------------
# WARNING
# --------------------------------------------------

st.warning(
    "⚠️ This result data is temporary. "
    "It will be cleared if you reload the page or start a new upload."
)
