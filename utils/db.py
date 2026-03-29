import json
import os
from pymongo import MongoClient
from datetime import datetime, UTC
import logging

from config import MONGO_URI, DATABASE_NAME

logger = logging.getLogger(__name__)


# --------------------------------------------------
# READ JSON
# --------------------------------------------------

def read_json(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)


# --------------------------------------------------
# DB CONNECTION
# --------------------------------------------------

def get_db():
    client = MongoClient(MONGO_URI)
    return client[DATABASE_NAME]


# --------------------------------------------------
# SAVE RESULT RECORDS
# --------------------------------------------------

def save_structured_records_to_mongodb(
    students,
    department_name,
    semester=None,
    upload_id=None,
    mode="Public"
):
    """
    Stores processed student results into MongoDB.

    IMPORTANT:
    - Batch must already be assigned in core.py
    - This function DOES NOT calculate batch
    """

    db = get_db()

    # 🔹 Select collection
    if mode == "Public":
        collection = db["Result_Public"]
    else:
        collection = db["Result_Private"]

    enriched_students = []
    #REMOVE THIS PART -----------------------------------------------------------------
    for s in students[:3]:
        print("💾 SAVING:", s.get("reg_no"), s.get("name"))
    #------------------------------------------------------------------
    for student in students:
        # 🔹 Ensure reg_no consistency
        reg_no = student.get("reg_no") or student.get("register_number")
        student["reg_no"] = reg_no

        # 🔹 Add metadata (DO NOT override existing logic)
        student["department_name"] = department_name
        student["semester"] = semester
        student["upload_id"] = upload_id
        student["created_at"] = datetime.now(UTC)

        # 🔥 IMPORTANT: batch must already exist
        student["batch"] = student.get("batch")

        enriched_students.append(student)

    if enriched_students:
        collection.insert_many(enriched_students)

    logger.info(f"Inserted {len(enriched_students)} records into {collection.name}")
    return len(enriched_students)


# --------------------------------------------------
# OPTIONAL: AUTO DETECT STUDENT
# --------------------------------------------------

def auto_detect_student(students):
    if not students:
        return None

    reg_no = students[0].get('reg_no') or students[0].get('register_number')

    if reg_no:
        return reg_no

    return None

"""
# --------------------------------------------------
# SETTINGS
# --------------------------------------------------

def initialize_settings():
    settings = {
        'db_path': os.getenv('DB_PATH'),
        'log_path': os.getenv('LOG_PATH'),
        'app_env': os.getenv('APP_ENV')
    }
    return settings

"""