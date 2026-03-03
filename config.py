from dotenv import load_dotenv
import os

load_dotenv("Api.env")

MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = os.getenv("DATABASE_NAME")
CREDIT_COLLECTION = os.getenv("CREDIT_COLLECTION")

if not MONGO_URI:
    raise ValueError("MONGO_URI not set in environment.")

if not DATABASE_NAME:
    raise ValueError("DATABASE_NAME not set in environment.")

print("Loaded MONGO_URI:", os.getenv("MONGO_URI"))

GRADE_TO_POINT = {
    "S": 10.0,
    "A+": 9.0,
    "A": 8.5,
    "B+": 8.0,
    "B": 7.5,
    "C+": 7.0,
    "C": 6.5,
    "D": 6.0,
    "P": 5.5,
    "F": 0.0,
    "FE": 0.0, # Failed due to eligibility
    "I": 0.0,  # Incomplete
    "Absent": 0.0,
    "Withheld": 0.0
}

GRADE_STATUS = {
    "S": "PASSED",
    "A+": "PASSED",
    "A": "PASSED",
    "B+": "PASSED",
    "B": "PASSED",
    "C+": "PASSED",
    "C": "PASSED",
    "D": "PASSED",
    "P": "PASSED",
    "F": "FAILED",
    "FE": "FAILED",
    "I": "FAILED",
    "WH": "WITHHELD"
}
