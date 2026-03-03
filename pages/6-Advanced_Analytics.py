import streamlit as st
import pandas as pd
from utils.db import get_db

st.set_page_config(page_title="Advanced Analytics", layout="wide")

st.title("📊 Advanced Analytics")
st.caption("Deep dive into historical performance trends and timeline-based evaluation.")

# ---------------- DATABASE FETCH ---------------- #

db = get_db()
collection = db["Result"]

data = list(collection.find({}, {"_id": 0}))
df = pd.DataFrame(data)

if df.empty:
    st.warning("No historical data available.")
    st.stop()
# ---------------- ADD THIS RIGHT HERE ---------------- #

# Ensure SGPA is numeric
if "SGPA" in df.columns:
    df["SGPA"] = pd.to_numeric(df["SGPA"], errors="coerce")

# Create pass_status dynamically (assuming SGPA >= 4.0 is pass)
df["pass_status"] = df["SGPA"] >= 4.0


# ---------------- TEMP DEPARTMENT SELECT (REMOVE LATER WHEN LOGIN READY) ---------------- #

all_departments = sorted(df["department_name"].dropna().unique())
department = st.selectbox("Select Department", all_departments)

df = df[df["department_name"] == department]
if df.empty:
    st.warning("No data available for selected department.")
    st.stop()

# ---------------- DATA TYPE CLEANING ---------------- #


if "scheme_year" in df.columns:
    df["scheme_year"] = pd.to_numeric(df["scheme_year"], errors="coerce")

if "semester" in df.columns:
    df["semester"] = pd.to_numeric(df["semester"], errors="coerce")

# ---------------- BASIC CALCULATIONS ---------------- #

avg_sgpa = round(df["SGPA"].mean(), 2)

# Assuming pass_status column exists (True/False)
if "pass_status" in df.columns:
    pass_percentage = round((df["pass_status"].sum() / len(df)) * 100, 2)
else:
    pass_percentage = None

# Assuming backlog_count column exists
if "backlog_count" in df.columns:
    total_backlogs = int(df["backlog_count"].sum())
else:
    total_backlogs = None

total_students = len(df)

# ---------------- KPI CARDS ---------------- #

col1, col2, col3, col4 = st.columns(4)

with col1:
    st.info(f"### 🎓 {avg_sgpa}\nAverage SGPA")

with col2:
    if pass_percentage is not None:
        st.success(f"### ✅ {pass_percentage}%\nPass Percentage")
    else:
        st.success("### ✅ N/A\nPass Percentage")

with col3:
    st.warning(f"### 👥 {total_students}\nTotal Students")

with col4:
    if total_backlogs is not None:
        st.error(f"### 📉 {total_backlogs}\nTotal Backlogs")
    else:
        st.error("### 📉 N/A\nTotal Backlogs")

st.divider()

# ---------------- SGPA TREND OVER TIME ---------------- #

st.subheader("📈 SGPA Trend Over Time")

if "scheme_year" in df.columns and "semester" in df.columns:

    trend_df = (
        df.groupby(["scheme_year", "semester"])["SGPA"]
        .mean()
        .reset_index()
        .sort_values(by=["scheme_year", "semester"])
    )

    trend_df["timeline"] = trend_df["scheme_year"].astype(str) + " - Sem " + trend_df["semester"].astype(str)

    st.line_chart(trend_df.set_index("timeline")["SGPA"])

else:
    st.info("Year or semester data not available for trend analysis.")

st.divider()

# ---------------- PASS PERCENTAGE TREND ---------------- #

if "pass_status" in df.columns and "scheme_year" in df.columns:

    pass_trend = (
        df.groupby("scheme_year")["pass_status"]
        .mean()
        .reset_index()
        .sort_values("scheme_year")
    )

    pass_trend["pass_percentage"] = pass_trend["pass_status"] * 100

    st.subheader("📊 Pass Percentage Over Years")
    st.bar_chart(pass_trend.set_index("scheme_year")["pass_percentage"])

st.divider()

# ---------------- YEAR-OVER-YEAR COMPARISON ---------------- #

st.subheader("📌 Performance Evaluation Summary")

if "scheme_year" in df.columns:

    yearly_avg = (
        df.groupby("scheme_year", as_index=False)["SGPA"]
        .mean()
        .reset_index()
        .sort_values("scheme_year")
    )

    if len(yearly_avg) >= 2:

        latest = yearly_avg.iloc[-1]["SGPA"]
        previous = yearly_avg.iloc[-2]["SGPA"]

        change = latest - previous
        percent_change = (change / previous) * 100

        if percent_change > 0:
            st.success(
                f"{department} shows a {percent_change:.2f}% improvement in average SGPA compared to last academic year."
            )
        elif percent_change < 0:
            st.error(
                f"{department} shows a {abs(percent_change):.2f}% decline in average SGPA compared to last academic year."
            )
        else:
            st.info("No significant change compared to last academic year.")

    else:
        st.info("Not enough historical data for year-over-year comparison.")

else:
    st.info("Year data not available for evaluation.")

st.divider()
st.subheader("🏆 Top 5 Performers (Current Academic Year)")

#---------------- GET LATEST YEAR------------------------------------

if "scheme_year" in df.columns:
    latest_year = df["scheme_year"].max()
    current_df = df[df["scheme_year"] == latest_year]
else:
    current_df = df

#------------------- TOPPERS-----------------------------------------

if "SGPA" in current_df.columns:

    top5 = (
        current_df.sort_values(by="SGPA", ascending=False)
        .head(5)
    )

    for index, row in top5.iterrows():
        st.success(
            f"{row.get('student_name', 'Student')} — SGPA: {row['SGPA']}"
        )
#---------------------- All-Time Highest Performers --------------------
st.divider()
st.subheader("🌟 All-Time Highest Performers")

if "SGPA" not in df.columns:
    st.warning("SGPA data not available.")
    st.stop()
df["SGPA"] = pd.to_numeric(df["SGPA"], errors="coerce")

df["rank"] = df["SGPA"].rank(ascending=False, method="min")

top5 = df.sort_values(by="SGPA", ascending=False).head(5)

for _, row in top5.iterrows():
    st.success(
        f"Rank {int(row['rank'])} — {row['reg_no']} | SGPA: {row['SGPA']}"
    )

