from fastapi import APIRouter, UploadFile, File, Depends, HTTPException, Query
from typing import Optional,Dict
import shutil
import os
import uuid
from fastapi.responses import StreamingResponse
import io

# 🔐 Auth (adjust import based on your structure)
from app.dependencies.auth_deps import verify_token
from app.dependencies.auth_optional import verify_token_optional

# 🔧 Core pipeline
from app.core.core import process_result_file

# 🗄️ DB
from app.core.utils.db import get_db, save_structured_records_to_mongodb

# 📊 Student services
from app.core.utils.student_service import (
    get_all_students,
    get_student,
    delete_student,
    filter_students,
    get_dashboard_counts,
    get_batches_with_departments,
    upsert_single_student,
    upsert_students,
    validate_student_dataframe,
    export_students_csv,
    get_batch_overview

)

router = APIRouter(prefix="/students",tags=["Students"])


# --------------------------------------------------
# 1️⃣ Upload Student File
# --------------------------------------------------
@router.post("/upload-csv")
async def upload_students_csv(
    file: UploadFile = File(...),
    batch: str = Query(...),
    user=Depends(verify_token)
):
    import pandas as pd
    db = get_db()

    try:
        df = pd.read_csv(file.file)

        missing = validate_student_dataframe(df)
        if missing:
            raise HTTPException(
                status_code=400,
                detail=f"Missing columns: {missing}"
            )

        inserted = upsert_students(db, df, batch)

        return {
            "message": "Students uploaded successfully",
            "inserted": inserted
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
# --------------------------------------------------
# 5️⃣ Dashboard Stats
# --------------------------------------------------
@router.get("/dashboard")
def get_dashboard(user=Depends(verify_token)):
    db = get_db()
    return get_dashboard_counts(db)


# --------------------------------------------------
# 2️⃣ Get All / Filter Students (student and Batch Overview)
# --------------------------------------------------
@router.get("")
def get_students(
    batch: Optional[str] = None,
    branch: Optional[str] = None,
    user=Depends(verify_token)
):
    db = get_db()

    if batch or branch:
        return filter_students(db, batch=batch, branch=branch)

    return get_all_students(db)


@router.get("/batches")
def get_batch_overview_api(user=Depends(verify_token)):
    db = get_db()
    return get_batch_overview(db)

# --------------------------------------------------
# 6️⃣ Batch + Department Metadata
# --------------------------------------------------

@router.get("/meta/batches")
def get_batch_metadata(user=Depends(verify_token)):
    db = get_db()
    return get_batches_with_departments(db)


# --------------------------------------------------
# 3️⃣ Manual Student Entry
# --------------------------------------------------
@router.post("")
def create_student(
    student_data: dict,
    user=Depends(verify_token)
):
    db = get_db()

    if "reg_no" not in student_data:
        raise HTTPException(status_code=400, detail="reg_no required")

    upsert_single_student(db, student_data)

    return {"message": "Student added successfully"}


# --------------------------------------------------
# 6️⃣ Expport to CSV
# --------------------------------------------------
@router.get("/export")
def export_students(user=Depends(verify_token)):
    db = get_db()

    stream = export_students_csv(db)

    return StreamingResponse(
        stream,
        media_type="text/csv",
        headers={
            "Content-Disposition": "attachment; filename=students.csv"
        }
    )

# --------------------------------------------------
# 4️⃣ Get Single Student in order to delete
# --------------------------------------------------
@router.get("/{reg_no}")
def get_single_student(
    reg_no: str,
    user = Depends(verify_token)
):
    db = get_db()

    student = get_student(db, reg_no)

    if not student:
        raise HTTPException(status_code=404, detail="Student not found")

    return student
# --------------------------------------------------
# 4️⃣ Delete Student
# --------------------------------------------------
@router.delete("/{reg_no}")
def remove_student(
    reg_no: str,
    user=Depends(verify_token)
):
    db = get_db()

    success = delete_student(db, reg_no)

    if not success:
        raise HTTPException(status_code=404, detail="Student not found")

    return {"message": "Student deleted successfully"}
