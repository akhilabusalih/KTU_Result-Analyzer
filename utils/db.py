import json
import os
from pymongo import MongoClient
from datetime import datetime, UTC
import logging

from config import MONGO_URI, DATABASE_NAME
from utils.batch import extract_batch_from_reg_no

# Read and parse JSON data from a specified file path

def read_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)


# Function to save student data

logger = logging.getLogger(__name__)


def get_db():
    client = MongoClient(MONGO_URI)
    return client[DATABASE_NAME]


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

    # ✅ Auto-detect admission_year/batch if not provided
    if (admission_year is None or batch is None) and students:
        first_reg = students[0].get("reg_no") or students[0].get("register_number")
        if first_reg:
            detected_year, detected_batch = extract_batch_from_reg_no(first_reg)
            admission_year = admission_year if admission_year is not None else detected_year
            batch = batch if batch is not None else detected_batch

    enriched_students = []

    for student in students:
        student["department_name"] = department_name
        student["semester"] = semester

        # Use parser values if available, otherwise fallback
        student["admission_year"] = student.get("admission_year") or admission_year
        student["batch"] = student.get("batch") or batch

        student["upload_id"] = upload_id
        student["created_at"] = datetime.now(UTC)

        enriched_students.append(student)

    if enriched_students:
        collection.insert_many(enriched_students)

    logger.info(f"Inserted {len(enriched_students)} records into 'Result'")
    return len(enriched_students)
# Function to auto-detect the student

def auto_detect_student(students):
    if not students:
        return None
    # Change auto-detect block to use students[0].get('reg_no')
    reg_no = students[0].get('reg_no') or students[0].get('register_number')
    if reg_no:
        # Logic to handle the registration number
        return reg_no
    return None


# Function to initialize settings from environment variables

def initialize_settings():
    settings = {
        'db_path': os.getenv('DB_PATH'),
        'log_path': os.getenv('LOG_PATH'),
        'app_env': os.getenv('APP_ENV')
    }
    return settings




