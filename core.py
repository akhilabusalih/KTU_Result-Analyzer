import logging
from typing import Tuple, List, Dict

from utils.parser import parse_department_result
from utils.batch import extract_batch_from_reg_no
from utils.sgpa import calculate_sgpa

logger = logging.getLogger(__name__)


# ----------------------------------------
# MASTER RESULT PROCESSOR
# ----------------------------------------

def process_result_file(
    file_path: str,
    department_name: str,
    db
) -> Tuple[List[str], List[Dict], int]:
    """
    Orchestrates full result processing pipeline.

    Returns:
        headers (list of subject codes),
        processed_students (list of enriched student dicts),
        semester (int)
    """

    logger.info("Starting department result processing")

    # 1️⃣ Parse department PDF
    students = parse_department_result(file_path, department_name)

    if not students:
        raise ValueError("No students found in PDF")

    processed_students = []

    # 2️⃣ Process each student
    for student in students:

        reg_no = student["reg_no"]

        # Batch extraction
        admission_year, batch = extract_batch_from_reg_no(reg_no)

        student["admission_year"] = admission_year
        student["batch"] = batch

        # Attach department name from upload context
        student["department_name"] = department_name

        # 3️⃣ SGPA calculation
        sgpa, total_credits = calculate_sgpa(db, student)

        student["SGPA"] = sgpa
        student["total_credits"] = total_credits

        processed_students.append(student)

    logger.info(
        f"Processed {len(processed_students)} students successfully"
    )

    # 4️⃣ Extract headers dynamically (union of subject codes)
    headers = set()

    for student in processed_students:
        for subject in student["subjects"]:
            headers.add(subject["subject_code"])

    headers = sorted(list(headers))

    # 5️⃣ Detect semester from first subject credit entry
    semester = None
    first_student = processed_students[0]

    for subject in first_student["subjects"]:
        subject_doc = db.Subject_Grade.find_one({
            "subject_code": subject["subject_code"],
            "scheme_year": first_student["scheme_year"]
        })

        if subject_doc:
            semester = subject_doc.get("semester")
            break

    return headers, processed_students, semester