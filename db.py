from pymongo import MongoClient
import logging
import os
import re

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

# ---------------- SAVE TO MONGODB ---------------- #

def save_csv_records_to_mongodb(df, department_name):
    """
       Saves a DataFrame into MongoDB as a collection.
       Collection name = department name (normalized)
    """
    db = get_db()

    collection_name = re.sub(
        r"[^a-z0-9_]",
        "",
        department_name.lower().replace(" ", "_")
    )

    collection = db[collection_name]

    clean_records = []

    for record in df.to_dict("records"):
        cleaned = {}

        for key, value in record.items():
            if key.lower() == "register no":
                cleaned[key] = value
            else:
                cleaned[key] = convert_grade_to_points(value)

        clean_records.append(cleaned)

    collection.delete_many({})
    collection.insert_many(clean_records)

    logger.info(
        f"Inserted {len(clean_records)} records into MongoDB collection '{collection_name}'"
    )

    return len(clean_records)