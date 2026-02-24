import streamlit as st
import pandas as pd
from db import get_db

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

# ---------------- TEMP DEPARTMENT SELECT (REMOVE LATER WHEN LOGIN READY) ---------------- #

all_departments = sorted(df["department"].dropna().unique())
department = st.selectbox("Select Department", all_departments)

df = df[df["department"] == department]

if df.empty:
    st.warning("No data available for selected department.")
    st.stop()

# ---------------- DATA TYPE CLEANING ---------------- #

if "CGPA" in df.columns:
    df["CGPA"] = pd.to_numeric(df["CGPA"], errors="coerce")

if "Year" in df.columns:
    df["Year"] = pd.to_numeric(df["Year"], errors="coerce")

if "semester" in df.columns:
    df["semester"] = pd.to_numeric(df["semester"], errors="coerce")

# ---------------- BASIC CALCULATIONS ---------------- #

avg_cgpa = round(df["CGPA"].mean(), 2)

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
    st.info(f"### 🎓 {avg_cgpa}\nAverage CGPA")

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

# ---------------- CGPA TREND OVER TIME ---------------- #

st.subheader("📈 CGPA Trend Over Time")

if "Year" in df.columns and "semester" in df.columns:

    trend_df = (
        df.groupby(["Year", "semester"])["CGPA"]
        .mean()
        .reset_index()
        .sort_values(by=["Year", "semester"])
    )

    trend_df["timeline"] = trend_df["Year"].astype(str) + " - Sem " + trend_df["semester"].astype(str)

    st.line_chart(trend_df.set_index("timeline")["CGPA"])

else:
    st.info("Year or semester data not available for trend analysis.")

st.divider()

# ---------------- PASS PERCENTAGE TREND ---------------- #

if "pass_status" in df.columns and "Year" in df.columns:

    pass_trend = (
        df.groupby("Year")["pass_status"]
        .mean()
        .reset_index()
        .sort_values("Year")
    )

    pass_trend["pass_percentage"] = pass_trend["pass_status"] * 100

    st.subheader("📊 Pass Percentage Over Years")
    st.bar_chart(pass_trend.set_index("Year")["pass_percentage"])

st.divider()

# ---------------- YEAR-OVER-YEAR COMPARISON ---------------- #

st.subheader("📌 Performance Evaluation Summary")

if "Year" in df.columns:

    yearly_avg = (
        df.groupby("Year", as_index=False)["CGPA"]
        .mean()
        .reset_index()
        .sort_values("Year")
    )

    if len(yearly_avg) >= 2:

        latest = yearly_avg.iloc[-1]["CGPA"]
        previous = yearly_avg.iloc[-2]["CGPA"]

        change = latest - previous
        percent_change = (change / previous) * 100

        if percent_change > 0:
            st.success(
                f"{department} shows a {percent_change:.2f}% improvement in average CGPA compared to last academic year."
            )
        elif percent_change < 0:
            st.error(
                f"{department} shows a {abs(percent_change):.2f}% decline in average CGPA compared to last academic year."
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

if "Year" in df.columns:
    latest_year = df["Year"].max()
    current_df = df[df["Year"] == latest_year]
else:
    current_df = df

#------------------- TOPPERS-----------------------------------------

if "CGPA" in current_df.columns:

    top5 = (
        current_df.sort_values(by="CGPA", ascending=False)
        .head(5)
    )

    for index, row in top5.iterrows():
        st.success(
            f"{row.get('student_name', 'Student')} — CGPA: {row['CGPA']}"
        )
#---------------------- All-Time Highest Performers --------------------
st.divider()
st.subheader("🌟 All-Time Highest Performers")

if "CGPA" not in df.columns:
    st.warning("CGPA data not available.")
    st.stop()
df["CGPA"] = pd.to_numeric(df["CGPA"], errors="coerce")

df["rank"] = df["CGPA"].rank(ascending=False, method="min")

top5 = df.sort_values(by="CGPA", ascending=False).head(5)

for _, row in top5.iterrows():
    st.success(
        f"Rank {int(row['rank'])} — {row['reg_no']} | CGPA: {row['CGPA']}"
    )

