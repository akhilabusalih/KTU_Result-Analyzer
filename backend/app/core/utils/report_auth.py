import os
import qrcode
from datetime import datetime
import socket


# --------------------------------------------------
# GET LOCAL IP
# --------------------------------------------------

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    finally:
        s.close()
    return ip


# --------------------------------------------------
# GENERATE QR CODE
# --------------------------------------------------

def generate_qr_code(report_id):

    ip = get_local_ip()

    verify_url = f"http://{ip}:8501/report_verification?report_id={report_id}"

    qr = qrcode.make(verify_url)

    os.makedirs("outputs/qr", exist_ok=True)

    qr_path = f"outputs/qr/{report_id}.png"

    qr.save(qr_path)

    return qr_path


# --------------------------------------------------
# SAVE REPORT METADATA
# --------------------------------------------------

def save_report_metadata(db, report_id, department, file_path, file_type):

    db["Report_Metadata"].insert_one({

        "report_id": report_id,
        "department": department,
        "file_path": file_path,
        "file_type": file_type,
        "generated_at": datetime.utcnow()

    })


# --------------------------------------------------
# VERIFY REPORT
# --------------------------------------------------

def verify_report(db, report_id):

    report = db["Report_Metadata"].find_one({
        "report_id": report_id
    })

    return report