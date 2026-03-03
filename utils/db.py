from pymongo import MongoClient

from datetime import datetime, UTC
import logging
logger = logging.getLogger(__name__)

from config import MONGO_URI, DATABASE_NAME
def get_db():
    client = MongoClient(MONGO_URI)
    return client[DATABASE_NAME]

def extract_admission_year_from_register(register_no: str):
    """
    Extract admission year from register number.
    Example: CMA19CE001 -> 2019
             LCMA19CE035 -> 2019
    """
    try:
        # Find first 2 consecutive digits in register number
        for i in range(len(register_no) - 1):
            if register_no[i:i+2].isdigit():
                year = int(register_no[i:i+2])
                return 2000 + year
    except Exception:
        pass

    return None


def generate_batch_from_year(admission_year: int):
    """
    Generate batch string like 2019-2023
    """
    if admission_year:
        return f"{admission_year}-{admission_year + 4}"
    return None



def save_structured_records_to_mongodb(
    students,
    department_name,
    semester=None,
    upload_id=None,
    admission_year=None,
    batch=None
):

    db = get_db()
    collection = db["Result"]

    enriched_students = []

    # 🔥 AUTO DETECT admission_year if not provided
    if not admission_year and students:
        first_reg = students[0].get("register_number")

        if first_reg:
            admission_year = extract_admission_year_from_register(first_reg)
            batch = generate_batch_from_year(admission_year)

    for student in students:

        student["department_name"] = department_name
        student["semester"] = semester
        student["admission_year"] = admission_year
        student["batch"] = batch
        student["upload_id"] = upload_id
        student["created_at"] = datetime.now(UTC)

        enriched_students.append(student)

    if enriched_students:
        collection.insert_many(enriched_students)

    logger.info(
        f"Inserted {len(enriched_students)} records into 'Result'"
    )

    return len(enriched_students)