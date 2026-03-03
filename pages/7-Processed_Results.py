import streamlit as st
import pandas as pd
from utils.db import get_db

st.set_page_config(
    page_title="Processed Results",
    page_icon="📂",
    layout="wide"
)

st.title("📂 Processed Results Overview")
st.caption("View all processed result datasets available in the system.")

db = get_db()

# Fetch metadata
metadata = list(
    db["Uploads_Metadata"].find({}, {"_id": 0})
)

if not metadata:
    st.info("No processed results found.")
else:
    df = pd.DataFrame(metadata)

    # Optional: sort by latest upload
    if "uploaded_at" in df.columns:
        df = df.sort_values(by="uploaded_at", ascending=False)
        # ✅ Format uploaded_at nicely (PLACE IT HERE)
        df["uploaded_at"] = pd.to_datetime(df["uploaded_at"]).dt.strftime("%Y-%m-%d %H:%M")

    # Reset index properly
    df = df.reset_index(drop=True)

    # Add serial number column starting from 1
    df.insert(0, "S.No", df.index + 1)

    st.dataframe(df, use_container_width=True, hide_index=True)