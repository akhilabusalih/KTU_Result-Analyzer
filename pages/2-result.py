import streamlit as st


# --------------------------------------------------
# PAGE CONFIG
# --------------------------------------------------
st.set_page_config(
    page_title="Result Analysis",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# --------------------------------------------------
# PAGE TITLE
# --------------------------------------------------
st.markdown("## 📊 Result Analysis")

# --------------------------------------------------
# SESSION VALIDATION
# --------------------------------------------------
if "current_df" not in st.session_state or "current_department" not in st.session_state:
    st.warning("No result data available.")
    st.info("Please upload and process a result PDF first.")
    st.stop()

df = st.session_state["current_df"]
department = st.session_state["current_department"]

# --------------------------------------------------
# BASIC METRICS
# --------------------------------------------------
total_students = len(df)
total_subjects = len(df.columns) - 1  # excluding Register No

# --------------------------------------------------
# DISPLAY HEADER
# --------------------------------------------------
st.markdown(f"### 📄 {department}")

col1, col2 = st.columns(2)

with col1:
    st.metric("Total Students", total_students)

with col2:
    st.metric("Total Subjects", total_subjects)

# --------------------------------------------------
# RESULT PREVIEW
# --------------------------------------------------
st.markdown("### 🔍 Student Result Preview")
st.dataframe(df, use_container_width=True)

# --------------------------------------------------
# DATA LOSS WARNING
# --------------------------------------------------
st.warning(
    "⚠️ This result data is temporary. "
    "It will be cleared if you reload the page, close the browser, or start a new upload."
)
