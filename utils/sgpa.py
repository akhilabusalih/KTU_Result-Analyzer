from typing import Tuple, Dict
from config import GRADE_TO_POINT
import math


# --------------------------------------
# DEPARTMENT MAPPING
# --------------------------------------

DEPARTMENT_MAP = {
    "CIVIL ENGINEERING": "CE",
    "COMPUTER SCIENCE AND ENGINEERING": "CSE",
    "ELECTRICAL AND ELECTRONICS ENGINEERING": "EEE",
    "MECHANICAL ENGINEERING": "ME",
    "CE": "CE",
    "CSE": "CSE",
    "EEE": "EEE",
    "ME": "ME"
}


# --------------------------------------
# FETCH SUBJECT CREDIT
# --------------------------------------

def get_subject_credit(db, subject_code: str, scheme_year: int, department: str):

    if not subject_code or not scheme_year:
        return None

    subject_code = subject_code.strip().upper()
    department = DEPARTMENT_MAP.get(department, department)

    # Department specific
    subject = db.Subject_Grade.find_one({
        "subject_code": subject_code,
        "scheme_year": scheme_year,
        "department": department
    })

    if subject:
        return subject.get("credit")

    # Common subjects fallback
    subject = db.Subject_Grade.find_one({
        "subject_code": subject_code,
        "scheme_year": scheme_year,
        "department": "ALL"
    })

    if subject:
        return subject.get("credit")

    print(f"❌ Credit not found → {subject_code} | {scheme_year} | {department}")
    return None


# --------------------------------------
# CALCULATE SGPA
# --------------------------------------

def calculate_sgpa(db, student: Dict) -> Tuple[float, int]:

    total_points = 0.0
    total_credits = 0

    scheme_year = student.get("scheme_year")
    department = student.get("department_name") or student.get("department")
    subjects = student.get("subjects", [])

    if not scheme_year or not department:
        print("⚠ Missing scheme_year or department")
        return 0.0, 0

    department = department.strip().upper()

    for subject in subjects:

        subject_code = subject.get("subject_code")
        grade = subject.get("grade")

        if not subject_code or not grade:
            continue

        grade = grade.strip().upper()

        if grade not in GRADE_TO_POINT:
            print(f"⚠ Unknown grade detected → {grade}")
            continue

        grade_point = GRADE_TO_POINT[grade]

        credit = get_subject_credit(
            db,
            subject_code,
            scheme_year,
            department
        )

        if credit is None:
            continue

        # Skip audit subjects (0 credit)
        if credit > 0:
            total_points += grade_point * credit
            total_credits += credit

    if total_credits == 0:
        return 0.0, 0

    # --------------------------------------
    # SGPA Calculation (truncate to 2 decimals)
    # --------------------------------------

    sgpa_raw = total_points / total_credits
    sgpa = math.floor(sgpa_raw * 100) / 100

    return sgpa, total_credits


# --------------------------------------
# UPDATE ALL STUDENTS SGPA
# --------------------------------------

def update_all_sgpa(db, student_collection_name: str):

    student_collection = db[student_collection_name]

    for student in student_collection.find():

        sgpa, total_credits = calculate_sgpa(db, student)

        student_collection.update_one(
            {"_id": student["_id"]},
            {
                "$set": {
                    "SGPA": sgpa,
                    "total_credits": total_credits
                }
            }
        )

        print(f"✅ Updated {student.get('reg_no')} → SGPA: {sgpa}")