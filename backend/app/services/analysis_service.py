import uuid
from app.core.core import process_result_file
from app.core.utils.db import save_structured_records_to_mongodb


# --------------------------------------------------
# UPLOAD HANDLER
# --------------------------------------------------

def handle_upload(file_path, department, db, mode):
    headers, students, semester, batch = process_result_file(
        file_path,
        department,
        db,
        mode
    )

    inserted_count = save_structured_records_to_mongodb(
        students,
        department,
        semester=semester,
        upload_id=str(uuid.uuid4()),
        mode=mode
    )

    return {
        "message": "File processed successfully",
        "inserted": inserted_count,
        "batch": batch,
        "semester": semester,
        "headers": headers
    }


# --------------------------------------------------
# FETCH RESULTS FOR ALL STUDENTS 
# --------------------------------------------------

def get_results(db, user, batch=None, department=None):
    collection = db["Result_Private"] if user else db["Result_Public"]

    query = {}

    if batch:
        query["batch"] = batch

    if department:
        query["department_name"] = department

    return list(collection.find(query, {"_id": 0}))

# --------------------------------------------------
# FETCH RESULTS FOR A SINGLE STUDENT
# --------------------------------------------------
def get_result_by_reg_no(db, reg_no, user):
    collection = db["Result_Private"] if user else db["Result_Public"]

    return collection.find_one({"reg_no": reg_no}, {"_id": 0})