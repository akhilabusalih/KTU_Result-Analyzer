from pymongo import MongoClient
import logging
import os
import re
from datetime import datetime, UTC

# ---------------- GRADE POINT MAP ---------------- #

GRADE_POINTS = {
    "S": 10,
    "A+": 9.0,
    "A": 8.5,
    "B+": 8.0,
    "B": 7.5,
    "C+": 7.0,
    "C": 6.5,
    "D": 6.0,
    "P": 5.5,
    "PASS": 5.5,
    "F": 0.0,
    "FAIL": 0.0,
    "FE": 0.0,
    "I": 0.0,
    "ABSENT": 0.0,
    "WITHHELD": 0.0,
    "TBP": 0.0
}

# ---------------- GRADE CONVERSION ---------------- #

def convert_grade_to_points(value):
    """
    Always returns a float.
    Unknown / missing / special values -> 0.0
    """
    if value is None:
        return 0.0

    value_str = str(value).strip().upper()
    return float(GRADE_POINTS.get(value_str, 0.0))


# Use environment variable if available (recommended)
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/")

DB_NAME = "result_analyzer"

logger = logging.getLogger(__name__)


def get_db():
    client = MongoClient(MONGO_URI)
    return client[DB_NAME]
def get_collection_name(department_name):
    return re.sub(
        r"[^a-z0-9_]",
        "",
        department_name.lower().replace(" ", "_")
    )


# ---------------- SAVE TO MONGODB ---------------- #

def save_structured_records_to_mongodb(
    students,
    department_name,
    semester=None,
    upload_id=None
):
    """
    Saves structured student records into unified 'Result' collection.
    """

    db = get_db()
    collection = db["Result"]

    enriched_students = []

    for student in students:

        student["department"] = department_name
        student["semester"] = semester
        student["upload_id"] = upload_id
        student["created_at"] = datetime.now(UTC)

        enriched_students.append(student)

    if enriched_students:
        collection.insert_many(enriched_students)

    logger.info(
        f"Inserted {len(enriched_students)} records into 'Result'"
    )

    return len(enriched_students)
