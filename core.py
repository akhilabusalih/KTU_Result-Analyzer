import logging
from typing import Tuple, List, Dict

from utils.parser import parse_department_result
from utils.sgpa import calculate_sgpa
from utils.batch_detector import detect_dominant_batch
from utils.student_filter import filter_students_by_batch
from utils.student_cleaner import clean_students_and_subjects

logger = logging.getLogger(__name__)


# ----------------------------------------
# MASTER PIPELINE (BEST PRACTICE)
# ----------------------------------------

def process_pipeline(file_path, department_name, db):
    """
    Full processing pipeline:
    parse → detect batch → filter → clean
    """

    # 1️⃣ Parse
    students = parse_department_result(file_path, department_name)

    if not students:
        raise ValueError("No students found in file")

    # 2️⃣ Detect batch
    detected_batch, _ = detect_dominant_batch(students)

    # Attach batch to each student
    for student in students:
        student["batch"] = detected_batch

    # 3️⃣ Filter students (remove outsiders)
    students, skipped_students = filter_students_by_batch(
        db,
        students,
        detected_batch
    )

    # 4️⃣ Clean subjects (remove HUT200 etc.)
    students, valid_subjects = clean_students_and_subjects(students)

    return students, detected_batch, skipped_students, valid_subjects


# ----------------------------------------
# MAIN RESULT PROCESSOR
# ----------------------------------------

def process_result_file(
    file_path: str,
    department_name: str,
    db,
    mode="Public",
) -> Tuple[List[str], List[Dict], int, str]:

    logger.info("Starting department result processing")

    # 🔥 Use pipeline ONLY in Private mode
    if mode == "Private":
        students, detected_batch, skipped_students, valid_subjects = process_pipeline(
            file_path,
            department_name,
            db
        )
    else:
        # Public mode → no filtering
        students = parse_department_result(file_path, department_name)

        if not students:
            raise ValueError("No students found in file")

        detected_batch, _ = detect_dominant_batch(students)

        for student in students:
            student["batch"] = detected_batch

        skipped_students = []
        valid_subjects = None

    processed_students = []

    print("DEBUG MODE IN CORE:", mode)

    # 5️⃣ SGPA Calculation
    for student in students:
        student["department_name"] = department_name
        if "name" not in student or not student["name"]:
            print(f"⚠️ Name missing for {student.get('reg_no')}")
        sgpa, total_credits = calculate_sgpa(db, student)

        student["SGPA"] = sgpa
        student["total_credits"] = total_credits

        processed_students.append(student)

    logger.info(f"Processed {len(processed_students)} students successfully")

    # 6️⃣ Headers (Subjects)

    if mode == "Private" and valid_subjects:
        headers = sorted(valid_subjects)
    else:
        headers_set = set()
        for student in processed_students:
            for subject in student["subjects"]:
                headers_set.add(subject["subject_code"])
        headers = sorted(list(headers_set))

    # 7️⃣ Semester Detection

    if not processed_students:
        raise ValueError(
            f"No valid students found for batch {detected_batch}. "
            f"Check database or batch filtering."
        )
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

    return headers, processed_students, semester, detected_batch
