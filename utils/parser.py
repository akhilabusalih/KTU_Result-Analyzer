import re
from typing import List, Dict
import pdfplumber
import PyPDF2
from PyPDF2.errors import PdfReadError


def extract_batch_info(reg_no: str):
    if reg_no.startswith("L"):
        reg_no = reg_no[1:]

    year_suffix = reg_no[3:5]
    admission_year = int("20" + year_suffix)
    batch = f"{admission_year}-{admission_year + 4}"

    return admission_year, batch

# ----------------------------------------
# REGISTER PATTERN (Regular + Lateral)
# ----------------------------------------

REG_PATTERN = r"L?[A-Z]{3}\d{2}[A-Z]{2}\d+"

# ----------------------------------------
# TEXT EXTRACTION
# ----------------------------------------

def extract_text_from_pdf(file_path: str) -> str:
    text = ""

    try:
        with pdfplumber.open(file_path) as pdf:
            for page in pdf.pages:
                extracted = page.extract_text()
                if extracted:
                    text += extracted + "\n"
    except (OSError, ValueError):
        pass

    if not text.strip():
        try:
            with open(file_path, "rb") as f:
                reader = PyPDF2.PdfReader(f)
                for page in reader.pages:
                    extracted = page.extract_text()
                    if extracted:
                        text += extracted + "\n"
        except (OSError, PdfReadError) as e:
            raise RuntimeError(f"PDF extraction failed: {e}")

    return text


# ----------------------------------------
# DETECT ALL DEPARTMENTS
# ----------------------------------------

def detect_departments(text: str) -> List[str]:
    pattern = r"([A-Z &]+)\[Full Time\]"
    matches = re.findall(pattern, text)
    return list(set(matches))


# ----------------------------------------
# ISOLATE ONE DEPARTMENT SECTION
# ----------------------------------------

def isolate_department_section(text: str, department_name: str) -> str:
    department_name = department_name.upper().strip()

    pattern = rf"{re.escape(department_name)}\[Full Time\].*?Register No Course Code \(Grade\)(.*?)(?=\n[A-Z &]+\[Full Time\]|\Z)"

    match = re.search(pattern, text, re.DOTALL)

    if not match:
        raise ValueError(f"{department_name} section not found in PDF")

    return match.group(1)


# ----------------------------------------
# SCHEME DETECTION FROM REGISTER NUMBER
# ----------------------------------------

def detect_scheme(register_number: str) -> int:
    if register_number.startswith("L"):
        register_number = register_number[1:]

    year_suffix = register_number[3:5]
    admission_year = int("20" + year_suffix)

    if admission_year >= 2024:
        return 2024
    return 2019


# ----------------------------------------
# STUDENT BLOCK EXTRACTION
# ----------------------------------------

def extract_student_blocks(department_text: str) -> List[Dict]:
    pattern = rf"({REG_PATTERN})(.*?)(?={REG_PATTERN}|\Z)"
    matches = re.findall(pattern, department_text, re.DOTALL)

    students = []

    for reg_no, block_text in matches:
        students.append({
            "reg_no": reg_no.strip(),
            "block_text": block_text.strip()
        })

    return students


# ----------------------------------------
# SUBJECT EXTRACTION
# ----------------------------------------

def extract_subjects_from_block(block_text: str) -> List[Dict]:
    pattern = r"([A-Z]{2,6}\d{3})\s*\(([^)]+)\)"
    matches = re.findall(pattern, block_text)

    subjects = []

    for code, grade in matches:
        grade = grade.strip()

        # Normalize grade
        grade = grade.strip().upper()

        if grade == "PASS":
            grade = "P"

        elif grade in ["ABSENT", "WITHHELD"]:
            grade = "F"

        elif grade == "FE":
            grade = "F"

        subjects.append({
            "subject_code": code.strip(),
            "grade": grade
        })

    return subjects


# ----------------------------------------
# MAIN PARSER
# ----------------------------------------

def parse_department_result(file_path: str, department_name: str) -> List[Dict]:
    full_text = extract_text_from_pdf(file_path)

    # Optional: Debug departments detected
    # print("Detected departments:", detect_departments(full_text))

    department_text = isolate_department_section(
        full_text,
        department_name
    )

    student_blocks = extract_student_blocks(department_text)

    structured_students = []

    for student in student_blocks:
        reg_no = student["reg_no"]

        scheme_year = detect_scheme(reg_no)

        admission_year, batch = extract_batch_info(reg_no)

        subjects = extract_subjects_from_block(
            student["block_text"]
        )

        structured_students.append({
            "reg_no": reg_no,
            "scheme_year": scheme_year,
            "subjects": subjects,
            "admission_year": admission_year,
            "batch": batch,
            "department_name": department_name
        })

    return structured_students