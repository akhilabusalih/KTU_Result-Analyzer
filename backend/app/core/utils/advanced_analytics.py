"""
utils/advanced_analytics.py

All data logic for Advanced Analytics. No Streamlit imports.
Ready for FastAPI migration — every function takes db or DataFrame, returns data.
"""

import re
import pandas as pd
from typing import Optional


# ----------------------------------------------------------------
# CONSTANTS
# ----------------------------------------------------------------

FAIL_GRADES = {"F", "FE", "ABSENT"}

# Subject code pattern for labs: e.g. CSL331, MEL333, EEL331, CEL333
LAB_PATTERN = re.compile(r"^[A-Z]{2}L\d{3}$")


# ----------------------------------------------------------------
# BASE FETCH & FILTERS
# ----------------------------------------------------------------

def get_all_results(db) -> pd.DataFrame:
    """Fetch all Result records. Returns clean DataFrame with enforced types."""
    data = list(db["Result"].find({}, {"_id": 0}))
    if not data:
        return pd.DataFrame()

    df = pd.DataFrame(data)
    df["SGPA"] = pd.to_numeric(df.get("SGPA"), errors="coerce")

    for col in ("semester", "admission_year"):
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    return df


def get_departments(df: pd.DataFrame) -> list:
    return sorted(df["department_name"].dropna().unique().tolist())


def get_batches_for_department(df: pd.DataFrame, department: str) -> list:
    dept_df = df[df["department_name"] == department]
    return sorted(dept_df["batch"].dropna().unique().tolist(), reverse=True)


def get_available_semesters(dept_df: pd.DataFrame) -> list:
    return sorted(dept_df["semester"].dropna().unique().astype(int).tolist())


def filter_by_department(df: pd.DataFrame, department: str) -> pd.DataFrame:
    return df[df["department_name"] == department].copy()


def filter_by_batch(df: pd.DataFrame, batch: str) -> pd.DataFrame:
    return df[df["batch"] == batch].copy()


def get_student_list(batch_df: pd.DataFrame) -> list:
    return sorted(batch_df["reg_no"].dropna().unique().tolist())


# ----------------------------------------------------------------
# TAB 1 — BATCH JOURNEY
# ----------------------------------------------------------------

def get_semester_summary(batch_df: pd.DataFrame) -> pd.DataFrame:
    """
    Semester-wise aggregate for a batch.
    Columns: Semester, Students, Avg SGPA, Max SGPA, Min SGPA, Pass %, Δ Avg SGPA
    """
    semesters = sorted(batch_df["semester"].dropna().unique())
    rows = []

    for sem in semesters:
        sem_data = batch_df[batch_df["semester"] == sem]
        total = len(sem_data)
        avg_sgpa = round(sem_data["SGPA"].mean(), 2)
        max_sgpa = round(sem_data["SGPA"].max(), 2)
        min_sgpa = round(sem_data["SGPA"].min(), 2)
        passed = (sem_data["SGPA"] > 0).sum()
        pass_pct = round((passed / total) * 100, 2) if total > 0 else 0.0

        rows.append({
            "Semester": int(sem),
            "Students": total,
            "Avg SGPA": avg_sgpa,
            "Max SGPA": max_sgpa,
            "Min SGPA": min_sgpa,
            "Pass %": pass_pct,
        })

    summary = pd.DataFrame(rows)

    if not summary.empty:
        summary["Δ Avg SGPA"] = summary["Avg SGPA"].diff().round(2)
        summary["Δ Avg SGPA"] = summary["Δ Avg SGPA"].apply(
            lambda x: f"+{x:.2f}" if pd.notna(x) and x > 0
            else (f"{x:.2f}" if pd.notna(x) else "—")
        )

    return summary


def get_latest_semester_kpi(summary_df: pd.DataFrame) -> dict:
    """KPI snapshot from the most recent semester row."""
    if summary_df.empty:
        return {}

    latest = summary_df.iloc[-1]
    result = {
        "semester": int(latest["Semester"]),
        "students": int(latest["Students"]),
        "avg_sgpa": latest["Avg SGPA"],
        "pass_pct": latest["Pass %"],
        "delta_sgpa": None,
    }

    if len(summary_df) >= 2:
        result["delta_sgpa"] = round(latest["Avg SGPA"] - summary_df.iloc[-2]["Avg SGPA"], 2)

    return result


def get_student_heatmap(batch_df: pd.DataFrame) -> pd.DataFrame:
    """
    Pivot table: rows = reg_no, columns = semester numbers, values = SGPA.
    Used for the student journey heatmap.
    NaN means the student has no record for that semester yet.
    """
    if batch_df.empty or "semester" not in batch_df.columns:
        return pd.DataFrame()

    pivot = batch_df.pivot_table(
        index="reg_no",
        columns="semester",
        values="SGPA",
        aggfunc="first"
    )

    pivot.columns = [f"S{int(c)}" for c in pivot.columns]
    pivot = pivot.sort_index()
    return pivot


def get_at_risk_students(batch_df: pd.DataFrame) -> pd.DataFrame:
    """
    Identify students showing warning signs across semesters.

    Returns DataFrame with columns:
        reg_no, risk_type, detail
    Risk types:
        - consecutive_drop: SGPA dropped 2+ semesters in a row
        - low_latest: SGPA < 5.0 in their most recent semester
        - backlog_buildup: SGPA = 0 in any semester (all subjects failed)
    """
    if batch_df.empty:
        return pd.DataFrame()

    semesters = sorted(batch_df["semester"].dropna().unique().astype(int))
    flags = []

    for reg_no in batch_df["reg_no"].dropna().unique():
        student_rows = (
            batch_df[batch_df["reg_no"] == reg_no]
            .dropna(subset=["semester"])
            .sort_values("semester")
        )

        if student_rows.empty:
            continue

        sgpa_series = student_rows["SGPA"].tolist()
        sem_series = student_rows["semester"].astype(int).tolist()

        # Check consecutive drops (2+ semesters in a row going down)
        drop_count = 0
        for i in range(1, len(sgpa_series)):
            if pd.notna(sgpa_series[i]) and pd.notna(sgpa_series[i-1]):
                if sgpa_series[i] < sgpa_series[i-1]:
                    drop_count += 1
                    if drop_count >= 2:
                        flags.append({
                            "reg_no": reg_no,
                            "risk_type": "Consecutive Drop",
                            "detail": f"SGPA fell for {drop_count} semesters in a row"
                        })
                        break
                else:
                    drop_count = 0

        # Check SGPA < 5 in latest semester
        latest_sgpa = sgpa_series[-1]
        latest_sem = sem_series[-1]
        if pd.notna(latest_sgpa) and 0 < latest_sgpa < 5.0:
            flags.append({
                "reg_no": reg_no,
                "risk_type": "Low SGPA",
                "detail": f"SGPA {latest_sgpa:.2f} in S{latest_sem}"
            })

        # Check SGPA = 0 (complete failure in a semester)
        for sgpa, sem in zip(sgpa_series, sem_series):
            if pd.notna(sgpa) and sgpa == 0.0:
                flags.append({
                    "reg_no": reg_no,
                    "risk_type": "Full Backlog",
                    "detail": f"0 SGPA in S{sem} — all subjects failed"
                })

    if not flags:
        return pd.DataFrame(columns=["reg_no", "risk_type", "detail"])

    return pd.DataFrame(flags).drop_duplicates().sort_values(["risk_type", "reg_no"])


def get_student_journey(batch_df: pd.DataFrame, reg_no: str) -> pd.DataFrame:
    """Single student SGPA across semesters. Columns: semester, SGPA"""
    df = (
        batch_df[batch_df["reg_no"] == reg_no][["semester", "SGPA"]]
        .dropna(subset=["semester"])
        .sort_values("semester")
        .copy()
    )
    df["semester"] = df["semester"].astype(int)
    return df


# ----------------------------------------------------------------
# TAB 2 — SEMESTER DEEP DIVE
# ----------------------------------------------------------------

def _unpack_subjects(batch_df: pd.DataFrame, semester: int) -> pd.DataFrame:
    """
    Unpack the subjects list column for a specific semester.
    Returns flat DataFrame with columns: reg_no, subject_code, grade, is_lab
    """
    sem_df = batch_df[batch_df["semester"] == semester].copy()

    if sem_df.empty or "subjects" not in sem_df.columns:
        return pd.DataFrame()

    rows = []
    for _, student in sem_df.iterrows():
        subjects = student.get("subjects", [])
        if not isinstance(subjects, list):
            continue
        for subj in subjects:
            if not isinstance(subj, dict):
                continue
            code = subj.get("subject_code", "")
            grade = str(subj.get("grade", "")).strip().upper()
            rows.append({
                "reg_no": student["reg_no"],
                "subject_code": code,
                "grade": grade,
                "is_lab": bool(LAB_PATTERN.match(code)),
            })

    return pd.DataFrame(rows)


def get_subject_difficulty(batch_df: pd.DataFrame, semester: int) -> pd.DataFrame:
    """
    Per-subject performance stats for a specific semester.

    Columns: subject_code, is_lab, appeared, pass_count, fail_count,
             pass_pct, grade_S, grade_A+, grade_A, ... grade_F
    Sorted by pass_pct ascending (hardest subject first).
    """
    flat = _unpack_subjects(batch_df, semester)
    if flat.empty:
        return pd.DataFrame()

    grade_order = ["S", "A+", "A", "B+", "B", "C+", "C", "D", "P", "F"]
    rows = []

    for code, group in flat.groupby("subject_code"):
        appeared = len(group)
        fail_count = group[group["grade"].isin(FAIL_GRADES)].shape[0]
        pass_count = appeared - fail_count
        pass_pct = round((pass_count / appeared) * 100, 2) if appeared > 0 else 0.0
        is_lab = group["is_lab"].iloc[0]

        grade_counts = group["grade"].value_counts().to_dict()

        row = {
            "subject_code": code,
            "is_lab": is_lab,
            "appeared": appeared,
            "pass_count": pass_count,
            "fail_count": fail_count,
            "pass_pct": pass_pct,
        }
        for g in grade_order:
            row[f"grade_{g}"] = grade_counts.get(g, 0)

        rows.append(row)

    if not rows:
        return pd.DataFrame()

    result = pd.DataFrame(rows).sort_values("pass_pct")
    return result


def get_lab_vs_theory(batch_df: pd.DataFrame, semester: int) -> dict:
    """
    Compare average pass% between lab subjects and theory subjects.

    Returns dict:
        lab: {avg_pass_pct, subject_count}
        theory: {avg_pass_pct, subject_count}
    """
    diff_df = get_subject_difficulty(batch_df, semester)
    if diff_df.empty:
        return {}

    labs = diff_df[diff_df["is_lab"] == True]
    theory = diff_df[diff_df["is_lab"] == False]

    return {
        "lab": {
            "avg_pass_pct": round(labs["pass_pct"].mean(), 2) if not labs.empty else 0,
            "subject_count": len(labs),
            "subjects": labs["subject_code"].tolist(),
        },
        "theory": {
            "avg_pass_pct": round(theory["pass_pct"].mean(), 2) if not theory.empty else 0,
            "subject_count": len(theory),
            "subjects": theory["subject_code"].tolist(),
        },
    }


# ----------------------------------------------------------------
# TAB 3 — CROSS COMPARISONS
# ----------------------------------------------------------------

def get_batch_comparison(dept_df: pd.DataFrame, semester: int) -> pd.DataFrame:
    """
    Compare all batches in a department for a given semester.
    Columns: batch, Students, Avg SGPA, Max SGPA, Min SGPA, Pass %
    """
    sem_df = dept_df[dept_df["semester"] == semester]
    if sem_df.empty:
        return pd.DataFrame()

    rows = []
    for batch, group in sem_df.groupby("batch"):
        total = len(group)
        passed = (group["SGPA"] > 0).sum()
        rows.append({
            "batch": batch,
            "Students": total,
            "Avg SGPA": round(group["SGPA"].mean(), 2),
            "Max SGPA": round(group["SGPA"].max(), 2),
            "Min SGPA": round(group["SGPA"].min(), 2),
            "Pass %": round((passed / total) * 100, 2) if total > 0 else 0.0,
        })

    return pd.DataFrame(rows).sort_values("batch")


def get_lateral_vs_regular(batch_df: pd.DataFrame) -> pd.DataFrame:
    """
    Split students in a batch into lateral (LCMA prefix) vs regular.
    Returns semester-wise avg SGPA for both groups.

    Columns: Semester, Regular Avg SGPA, Lateral Avg SGPA
    """
    if batch_df.empty:
        return pd.DataFrame()

    df = batch_df.copy()
    df["is_lateral"] = df["reg_no"].str.startswith("L")

    semesters = sorted(df["semester"].dropna().unique().astype(int))
    rows = []

    for sem in semesters:
        sem_data = df[df["semester"] == sem]
        regular = sem_data[sem_data["is_lateral"] == False]["SGPA"]
        lateral = sem_data[sem_data["is_lateral"] == True]["SGPA"]

        # Lateral students only appear from S3 onwards by definition
        rows.append({
            "Semester": int(sem),
            "Regular Avg": round(regular.mean(), 2) if not regular.empty else None,
            "Regular Count": len(regular),
            "Lateral Avg": round(lateral.mean(), 2) if not lateral.empty else None,
            "Lateral Count": len(lateral),
        })

    return pd.DataFrame(rows)


def get_cross_dept_comparison(df: pd.DataFrame, batch: str, semester: int) -> pd.DataFrame:
    """
    For the same batch year and semester, compare performance across all departments.
    Columns: department_name, Students, Avg SGPA, Max SGPA, Pass %
    """
    filtered = df[
        (df["batch"] == batch) &
        (df["semester"] == semester)
    ]

    if filtered.empty:
        return pd.DataFrame()

    rows = []
    for dept, group in filtered.groupby("department_name"):
        total = len(group)
        passed = (group["SGPA"] > 0).sum()
        rows.append({
            "Department": dept,
            "Students": total,
            "Avg SGPA": round(group["SGPA"].mean(), 2),
            "Max SGPA": round(group["SGPA"].max(), 2),
            "Pass %": round((passed / total) * 100, 2) if total > 0 else 0.0,
        })

    return pd.DataFrame(rows).sort_values("Avg SGPA", ascending=False)