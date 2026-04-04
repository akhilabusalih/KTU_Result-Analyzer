from fastapi import APIRouter, UploadFile, File, Depends, HTTPException, Query
from typing import Optional,Dict
import shutil
import os
import uuid

# 🔐 Auth (adjust import based on your structure)
from app.dependencies.auth_deps import verify_token

# 🔧 Core pipeline
from app.core.core import process_result_file

# 🗄️ DB
from app.core.utils.db import get_db, save_structured_records_to_mongodb


from app.services.analysis_service import handle_upload

router = APIRouter(prefix="/analysis")


@router.post("/upload/private",tags=["Upload (Private)"])
async def upload_private(
    file: UploadFile = File(...),
    department: str = Query(...),
    user=Depends(verify_token)  # 🔥 THIS gives lock icon
):
    temp_filename = f"temp_{uuid.uuid4().hex}.pdf"

    try:
        with open(temp_filename, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        db = get_db()

        return handle_upload(
            temp_filename,
            department,
            db,
            mode="Private"
        )

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    finally:
        if os.path.exists(temp_filename):
            os.remove(temp_filename)