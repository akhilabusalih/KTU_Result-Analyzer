import streamlit as st
from utils.db import get_db
from utils.report_auth import verify_report


# --------------------------------------------------
# PAGE CONFIG
# --------------------------------------------------

st.set_page_config(
    page_title="Report Verification",
    page_icon="🔍",
    layout="centered"
)

st.title("🔍 Report Authenticity Verification")


# --------------------------------------------------
# DATABASE
# --------------------------------------------------

db = get_db()


# --------------------------------------------------
# CHECK URL PARAM (QR SCAN)
# --------------------------------------------------

query_params = st.query_params

report_id_from_qr = query_params.get("report_id")
if isinstance(report_id_from_qr, list):
    report_id_from_qr = report_id_from_qr[0]

# --------------------------------------------------
# MANUAL INPUT
# --------------------------------------------------

manual_report_id = st.text_input("Enter Report ID")

st.caption("You can either enter the Report ID or scan the QR code on the report.")
# If QR provided ID use that, otherwise manual
report_id = report_id_from_qr if report_id_from_qr else manual_report_id


# --------------------------------------------------
# VERIFY BUTTON OR AUTO VERIFY
# --------------------------------------------------

if st.button("Verify Report") or (report_id_from_qr is not None):

    if not report_id:
        st.warning("Please enter a Report ID")
        st.stop()

    report = verify_report(db, report_id)

    if report:

        st.success("✔ Valid Report")

        st.markdown("### Report Details")

        st.write(f"**Report ID:** {report['report_id']}")
        st.write(f"**Department:** {report['department']}")
        st.write(f"**File Type:** {report['file_type']}")
        st.write(f"**Generated On:** {report['generated_at']}")

    else:

        st.error("❌ Invalid or Unknown Report ID")