import pdfplumber
import re
import logging
import os
from datetime import datetime
from config import GRADE_TO_POINT, GRADE_STATUS
import pandas as pd
from PyPDF2 import PdfReader
# ---------------- LOGGING SETUP ---------------- #

LOG_DIR = "logs"
os.makedirs(LOG_DIR, exist_ok=True)

log_filename = datetime.now().strftime("%Y-%m-%d_%H-%M-%S.log")
log_path = os.path.join(LOG_DIR, log_filename)

logging.basicConfig(
    filename=log_path,
    filemode="w",
    format="%(asctime)s | %(levelname)s | %(message)s",
    level=logging.INFO
)

logger = logging.getLogger(__name__)

logger.info("Core parser initialized")


# ---------------- REGEX PATTERNS ---------------- #

DEPT_PATTERN = re.compile(
    r"(.+?)\s*ENGINEERING\s*\[Full Time\]",
    re.IGNORECASE
)

REG_NO_PATTERN = re.compile(
    r"^[A-Z]+\d{2}[A-Z]{2}\d{3}"
)

GRADE_PATTERN = re.compile(
    r"([A-Z]{3}\d{3})\s*\(([^)]+)\)"
)

IGNORE_KEYWORDS = [
    "APJ ABDUL KALAM",
    "Thiruvananthapuram",
    "Exam Centre",
    "Course Code",
    "To Be Published",
    "Register No",
    "The following table",
    "Page"
]




# ---------------- HELPERS ---------------- #

def clean_text(text: str) -> str:
    return " ".join(text.split())


#-------------------SEMESTER IDENTIFIER-------------------------
def extract_semester_from_pdf(file_path):
    """
    Extract semester number from first page of PDF.
    Looks for patterns like S1, S2, S3, etc.
    """

    reader = PdfReader(file_path)
    first_page_text = reader.pages[0].extract_text()

    # Look for S1, S2 ... S8
    match = re.search(r'\bS([1-8])\b', first_page_text)

    if match:
        return int(match.group(1))

    return None


# ---------------- PASS 1 ---------------- #

def get_available_departments(pdf_path: str):
    logger.info(f"Scanning PDF for departments: {pdf_path}")
    departments = []

    with pdfplumber.open(pdf_path) as pdf:
        for page_no, page in enumerate(pdf.pages, start=1):
            text = page.extract_text()
            if not text:
                logger.warning(f"Empty text on page {page_no}")
                continue

            for line in text.split("\n"):
                match = DEPT_PATTERN.search(line)
                if match:
                    dept = match.group(1).strip().upper() + " ENGINEERING"
                    if dept not in departments:
                        departments.append(dept)
                        logger.info(f"Department detected: {dept}")

    logger.info(f"Total departments found: {len(departments)}")
    return departments


# ---------------- PASS 2 ---------------- #

def extract_raw_lines_for_dept(pdf_path: str, target_dept_name: str):
    logger.info(f"Starting extraction for department: {target_dept_name}")

    extracted_data = []
    extracting = False
    current_reg_no = None
    current_grades = []

    with pdfplumber.open(pdf_path) as pdf:
        for page_no, page in enumerate(pdf.pages, start=1):
            text = page.extract_text()
            if not text:
                logger.warning(f"Empty text on page {page_no}")
                continue

            for line in text.split("\n"):
                line = line.strip()
                if not line:
                    continue

                dept_match = DEPT_PATTERN.search(line)
                if dept_match:
                    found = dept_match.group(1).strip().upper() + " ENGINEERING"

                    if extracting:
                        if current_reg_no:
                            extracted_data.append(
                                (current_reg_no, clean_text(" ".join(current_grades)))
                            )
                            logger.info(f"Final student saved: {current_reg_no}")
                        logger.info("Next department reached. Stopping extraction.")
                        return extracted_data

                    if found == target_dept_name:
                        extracting = True
                        logger.info(f"Entered department section: {found}")
                    continue

                if not extracting:
                    continue

                reg_match = REG_NO_PATTERN.match(line)
                if reg_match:
                    if current_reg_no:
                        extracted_data.append(
                            (current_reg_no, clean_text(" ".join(current_grades)))
                        )
                        logger.info(f"Student parsed: {current_reg_no}")

                    current_reg_no = reg_match.group(0)
                    current_grades = []

                    rest = line[len(current_reg_no):].strip()
                    rest = rest.lstrip(",").lstrip('"').strip()
                    if rest:
                        current_grades.append(rest)

                elif current_reg_no:
                    if not any(k.lower() in line.lower() for k in IGNORE_KEYWORDS):
                        current_grades.append(line)

        if extracting and current_reg_no:
            extracted_data.append(
                (current_reg_no, clean_text(" ".join(current_grades)))
            )
            logger.info(f"Last student saved: {current_reg_no}")

    logger.info(f"Total students extracted: {len(extracted_data)}")
    return extracted_data


# ---------------- PASS 3 ---------------- #

def create_matrix_data(raw_data):
    logger.info("Creating structured student data")

    parsed_students = []
    all_subjects = set()

    for reg_no, text_blob in raw_data:

        student = {
            "reg_no": reg_no,
            "subjects": {}
        }

        matches = GRADE_PATTERN.findall(text_blob)

        for subject, grade in matches:

            grade = grade.strip()

            student["subjects"][subject] = {
                "grade": grade,
                "grade_point": GRADE_TO_POINT.get(grade, 0),
                "status": GRADE_STATUS.get(grade, "UNKNOWN")
            }

            all_subjects.add(subject)

        parsed_students.append(student)

    logger.info(
        f"Structured data created for {len(parsed_students)} students "
        f"with {len(all_subjects)} subjects"
    )

    return sorted(all_subjects), parsed_students

# ---------------- STRUCTURED FILE SUPPORT ---------------- #

def load_structured_file_with_detection(file_path):
    """
    Loads CSV or Excel file and automatically detects
    the header row containing 'Register'.
    """

    if file_path.endswith(".csv"):
        raw_df = pd.read_csv(file_path, header=None)
    else:
        raw_df = pd.read_excel(file_path, header=None)

    header_row_index = None

    for i in range(len(raw_df)):
        row_values = raw_df.iloc[i].astype(str).str.upper().tolist()

        if any("REGISTER" in cell for cell in row_values):
            header_row_index = i
            break

    if header_row_index is None:
        raise ValueError(
            "Could not detect header row containing 'Register'"
        )

    if file_path.endswith(".csv"):
        df = pd.read_csv(file_path, header=header_row_index)
    else:
        df = pd.read_excel(file_path, header=header_row_index)

    return df

def parse_result_file(file_path, department_name=None):
    """
    Smart parser:
    - PDF → existing PDF logic
    - CSV/XLSX → structured parser
    Always returns:
        headers, matrix_data
    """

    extension = file_path.split(".")[-1].lower()

    # ---------------- PDF ---------------- #
    if extension == "pdf":

        # 🔥 Extract semester automatically
        semester = extract_semester_from_pdf(file_path)

        raw_data = extract_raw_lines_for_dept(
            file_path,
            department_name
        )

        headers, students = create_matrix_data(raw_data)

        return headers, students, semester
    # ---------------- CSV / EXCEL ---------------- #
    elif extension in ["csv", "xlsx", "xls"]:

        df = load_structured_file_with_detection(file_path)

        if "Register No" not in df.columns:
            raise ValueError(
                "File must contain 'Register No' column."
            )

        students = []
        subjects = [
            col for col in df.columns
            if col != "Register No"
        ]

        for _, row in df.iterrows():

            student = {
                "reg_no": row["Register No"],
                "subjects": {}
            }

            for subject in subjects:

                grade = str(row[subject]).strip().upper()

                student["subjects"][subject] = {
                    "grade": grade,
                    "grade_point": GRADE_TO_POINT.get(grade, 0),
                    "status": GRADE_STATUS.get(grade, "UNKNOWN")
                }

            students.append(student)

        return subjects, students

    else:
        raise ValueError("Unsupported file format")

def get_current_log_filename():
    return log_filename