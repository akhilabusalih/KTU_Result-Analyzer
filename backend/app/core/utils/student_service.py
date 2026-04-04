from datetime import datetime, UTC
import pandas as pd
import io
# --------------------------------------------------
# CONSTANTS
# --------------------------------------------------
COLLECTION_NAME = "Student_data"

# --------------------------------------------------
# HELPER: MAP DB DOCUMENT -> FRONTEND DICT
# --------------------------------------------------
def _db_to_frontend(doc):
    """Convert a database document (with branch) to frontend dict (with department)."""
    if doc is None:
        return None
    frontend = {
        "reg_no": doc.get("reg_no"),
        "name": doc.get("name"),
        "department": doc.get("branch"),          # branch -> department
        "batch": doc.get("batch"),
        "scheme_year": doc.get("scheme_year", "")  # default if missing
    }
    return frontend

# --------------------------------------------------
# HELPER: MAP FRONTEND DICT -> DB DOC
# --------------------------------------------------
def _frontend_to_db(data):
    """Convert frontend dict (with department) to database doc (with branch)."""
    db_doc = {
        "reg_no": data.get("reg_no"),
        "name": data.get("name"),
        "branch": data.get("department"),         # department -> branch
        "batch": data.get("batch"),
        "updated_at": datetime.now(UTC)
    }
    if "scheme_year" in data:
        db_doc["scheme_year"] = data.get("scheme_year")
    return db_doc

# --------------------------------------------------
# VALIDATION (unchanged)
# --------------------------------------------------
REQUIRED_COLUMNS = ["Register No", "Name", "Department", "Scheme Year"]

def validate_student_dataframe(df: pd.DataFrame):
    missing = [col for col in REQUIRED_COLUMNS if col not in df.columns]
    return missing

# --------------------------------------------------
# BATCH UPLOAD
# --------------------------------------------------
def upsert_students(db, df: pd.DataFrame, batch: str):
    collection = db[COLLECTION_NAME]
    records = df.to_dict(orient="records")
    success_count = 0

    for r in records:
        try:
            # Build database document from CSV row
            doc = {
                "reg_no": r["Register No"],
                "name": r["Name"],
                "branch": r["Department"],          # map Department -> branch
                "scheme_year": r["Scheme Year"],
                "batch": batch,
                "updated_at": datetime.now(UTC)
            }
            collection.update_one(
                {"reg_no": r["Register No"]},
                {"$set": doc},
                upsert=True
            )
            success_count += 1
        except Exception:
            continue
    return success_count

# --------------------------------------------------
# SINGLE STUDENT UPSERT
# --------------------------------------------------
def upsert_single_student(db, student_data: dict):
    collection = db[COLLECTION_NAME]
    db_doc = _frontend_to_db(student_data)
    collection.update_one(
        {"reg_no": db_doc["reg_no"]},
        {"$set": db_doc},
        upsert=True
    )

# --------------------------------------------------
# FETCH ALL STUDENTS
# --------------------------------------------------
def get_all_students(db):
    docs = list(db[COLLECTION_NAME].find({}, {"_id": 0}))
    return [_db_to_frontend(d) for d in docs]

# --------------------------------------------------
# FILTER STUDENTS
# --------------------------------------------------
def filter_students(db, batch=None, department=None):
    query = {}
    if batch:
        query["batch"] = batch
    if department:
        query["branch"] = department   # map department -> branch
    docs = list(db[COLLECTION_NAME].find(query, {"_id": 0}))
    return [_db_to_frontend(d) for d in docs]

# --------------------------------------------------
# GET DISTINCT BATCHES + DEPARTMENTS
# --------------------------------------------------
def get_batches_with_departments(db):
    pipeline = [
        {"$group": {"_id": {"batch": "$batch", "branch": "$branch"}}}
    ]
    results = list(db[COLLECTION_NAME].aggregate(pipeline))
    # Return as list of dicts with "batch" and "department" (branch renamed)
    return [
        {"batch": r["_id"]["batch"], "department": r["_id"]["branch"]}
        for r in results
    ]

# --------------------------------------------------
# GET COUNTS
# --------------------------------------------------
def get_dashboard_counts(db):
    total_students = db[COLLECTION_NAME].count_documents({})
    batches = get_batches_with_departments(db)
    total_batches = len(batches)
    total_departments = len(set(batch["department"] for batch in batches))
    total_scheme_years = len(db[COLLECTION_NAME].distinct("scheme_year"))
    return {
        "total_students": total_students,
        "total_batches": total_batches,
        "total_departments": total_departments,
        "total_scheme_years": total_scheme_years
    }

# --------------------------------------------------
# GET BATCH OVERVIEW
# --------------------------------------------------

def get_batch_overview(db):
    pipeline = [
        {
            "$group": {
                "_id": "$batch",
                "departments": {"$addToSet": "$branch"},
                "scheme_year": {"$first": "$scheme_year"},
                "students": {"$sum": 1}
            }
        },
        {
            "$project": {
                "_id": 0,
                "batch": "$_id",
                "department": "$departments",
                "scheme_year": 1,
                "students": 1
            }
        }
    ]

    return list(db[COLLECTION_NAME].aggregate(pipeline))

# --------------------------------------------------
# DELETE STUDENT
# --------------------------------------------------
def delete_student(db, reg_no: str):
    result = db[COLLECTION_NAME].delete_one({"reg_no": reg_no})
    return result.deleted_count > 0

# --------------------------------------------------
# GET STUDENT BY REG NO
# --------------------------------------------------
def get_student(db, reg_no: str):
    doc = db[COLLECTION_NAME].find_one({"reg_no": reg_no}, {"_id": 0})
    return _db_to_frontend(doc)

# --------------------------------------------------
# EXPORT TO CSV
# --------------------------------------------------
def export_students_csv(db):
    students = get_all_students(db)

    df = pd.DataFrame(students)

    stream = io.StringIO()
    df.to_csv(stream, index=False)

    stream.seek(0)

    return stream