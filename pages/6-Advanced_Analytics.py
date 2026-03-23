"""
pages/6-Advanced_Analytics.py

Frontend only. All data logic lives in utils/advanced_analytics.py.
Three tabs: Batch Journey | Semester Deep Dive | Cross Comparisons
"""

import streamlit as st
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker
import matplotlib.colors as mcolors
import numpy as np
import pandas as pd

from utils.db import get_db
from utils.advanced_analytics import (
    get_all_results,
    get_departments,
    get_batches_for_department,
    get_available_semesters,
    filter_by_department,
    filter_by_batch,
    get_semester_summary,
    get_latest_semester_kpi,
    get_student_heatmap,
    get_at_risk_students,
    get_student_journey,
    get_student_list,
    get_subject_difficulty,
    get_lab_vs_theory,
    get_batch_comparison,
    get_lateral_vs_regular,
    get_cross_dept_comparison,
)

st.set_page_config(page_title="Advanced Analytics", layout="wide")

st.title("📊 Advanced Analytics")

# ----------------------------------------------------------------
# DATA LOAD
# ----------------------------------------------------------------

db = get_db()
df = get_all_results(db)

if df.empty:
    st.warning("No historical data available. Upload and process a result PDF first.")
    st.stop()

# ----------------------------------------------------------------
# GLOBAL FILTERS (above tabs — apply to all three views)
# ----------------------------------------------------------------

st.markdown("#### Filters")
fc1, fc2, fc3 = st.columns(3)

with fc1:
    department = st.selectbox("Department", get_departments(df))

dept_df = filter_by_department(df, department)

with fc2:
    batches = get_batches_for_department(df, department)
    if not batches:
        st.warning("No batch data for this department.")
        st.stop()
    selected_batch = st.selectbox("Batch", batches)

batch_df = filter_by_batch(dept_df, selected_batch)

with fc3:
    available_sems = get_available_semesters(batch_df)
    if not available_sems:
        st.warning("No semester data for this batch.")
        st.stop()
    selected_sem_label = st.selectbox(
        "Semester (for deep dive & comparisons)",
        [f"S{s}" for s in available_sems]
    )
    selected_sem = int(selected_sem_label[1:])

if batch_df.empty:
    st.warning("No data found for this selection.")
    st.stop()

st.divider()

# ----------------------------------------------------------------
# THREE TABS
# ----------------------------------------------------------------

tab1, tab2, tab3 = st.tabs([
    "📈 Batch Journey",
    "🔬 Semester Deep Dive",
    "🔀 Cross Comparisons"
])


# ================================================================
# TAB 1 — BATCH JOURNEY
# ================================================================

with tab1:

    summary_df = get_semester_summary(batch_df)
    kpi = get_latest_semester_kpi(summary_df)
    semesters_available = batch_df["semester"].dropna().unique()

    # --- KPI Cards ---
    if kpi:
        st.markdown(f"##### {selected_batch} — S{kpi['semester']} snapshot")
        c1, c2, c3, c4, c5 = st.columns(5)
        c1.metric("Batch", selected_batch)
        c2.metric("Students", kpi["students"])
        c3.metric("Avg SGPA", kpi["avg_sgpa"])
        c4.metric("Pass %", f"{kpi['pass_pct']}%")
        delta = kpi["delta_sgpa"]
        c5.metric(
            "vs Previous Sem",
            kpi["avg_sgpa"],
            delta=f"{delta:+.2f}" if delta is not None else None,
            delta_color="normal"
        )

    st.divider()

    # --- SGPA Progression + Student Heatmap side by side ---
    col_chart, col_heat = st.columns([1, 1])

    with col_chart:
        st.subheader("SGPA Progression")

        if not summary_df.empty:
            fig, ax = plt.subplots(figsize=(5.5, 4))
            x = summary_df["Semester"].astype(int)

            ax.fill_between(x, summary_df["Min SGPA"], summary_df["Max SGPA"],
                            alpha=0.13, color="#4C72B0", label="Min–Max band")
            ax.plot(x, summary_df["Avg SGPA"], marker="o", linewidth=2.2,
                    color="#4C72B0", label="Avg SGPA", zorder=3)
            ax.plot(x, summary_df["Max SGPA"], marker="^", linewidth=1,
                    linestyle="--", color="#2ca02c", alpha=0.65, label="Highest")
            ax.plot(x, summary_df["Min SGPA"], marker="v", linewidth=1,
                    linestyle="--", color="#d62728", alpha=0.65, label="Lowest")

            for _, row in summary_df.iterrows():
                ax.annotate(f"{row['Avg SGPA']}", (row["Semester"], row["Avg SGPA"]),
                            textcoords="offset points", xytext=(0, 8),
                            ha="center", fontsize=8.5, color="#4C72B0", fontweight="bold")

            ax.set_xticks(x)
            ax.set_xticklabels([f"S{int(s)}" for s in x])
            ax.set_ylim(0, 10.5)
            ax.yaxis.set_major_locator(mticker.MultipleLocator(1))
            ax.set_ylabel("SGPA")
            ax.set_title(f"{department[:25]} | {selected_batch}", fontsize=10)
            ax.legend(fontsize=8)
            ax.grid(axis="y", alpha=0.3)
            st.pyplot(fig)
            plt.close(fig)

    with col_heat:
        st.subheader("Student Journey Heatmap")
        st.caption("Each row = one student. Color = SGPA. White = not yet uploaded.")

        heatmap_df = get_student_heatmap(batch_df)

        if not heatmap_df.empty:
            fig2, ax2 = plt.subplots(figsize=(5.5, max(4, len(heatmap_df) * 0.22)))

            # Build numeric array, NaN for missing
            data_arr = heatmap_df.values.astype(float)

            # Custom colormap: white=NaN, red=0, yellow=5, green=10
            cmap = plt.cm.RdYlGn
            cmap.set_bad(color="#f0f0f0")

            masked = np.ma.array(data_arr, mask=np.isnan(data_arr))
            im = ax2.imshow(masked, cmap=cmap, vmin=0, vmax=10, aspect="auto")

            # Axes labels
            ax2.set_xticks(range(len(heatmap_df.columns)))
            ax2.set_xticklabels(heatmap_df.columns, fontsize=9)
            ax2.set_yticks(range(len(heatmap_df.index)))
            ax2.set_yticklabels(heatmap_df.index, fontsize=6.5)

            # Cell value annotations (only if not too many students)
            if len(heatmap_df) <= 40:
                for i in range(data_arr.shape[0]):
                    for j in range(data_arr.shape[1]):
                        val = data_arr[i, j]
                        if not np.isnan(val):
                            txt_color = "white" if val < 4 or val > 8.5 else "black"
                            ax2.text(j, i, f"{val:.1f}", ha="center", va="center",
                                     fontsize=6, color=txt_color)

            plt.colorbar(im, ax=ax2, label="SGPA", shrink=0.6)
            ax2.set_title("SGPA by student × semester", fontsize=10)
            plt.tight_layout()
            st.pyplot(fig2)
            plt.close(fig2)
        else:
            st.info("Not enough data to build heatmap yet.")

    st.divider()

    # --- Pass % bar + summary table side by side ---
    col_bar, col_table = st.columns([1, 1])

    with col_bar:
        st.subheader("Pass % Per Semester")

        fig3, ax3 = plt.subplots(figsize=(5.5, 3.2))
        bar_colors = ["#2ca02c" if p >= 75 else "#ff7f0e" if p >= 50 else "#d62728"
                      for p in summary_df["Pass %"]]
        bars = ax3.bar([f"S{int(s)}" for s in summary_df["Semester"]],
                       summary_df["Pass %"], color=bar_colors, width=0.5, zorder=3)
        for bar, val in zip(bars, summary_df["Pass %"]):
            ax3.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 1,
                     f"{val}%", ha="center", va="bottom", fontsize=9, fontweight="bold")
        ax3.axhline(75, color="gray", linestyle="--", linewidth=0.8, alpha=0.6)
        ax3.set_ylim(0, 115)
        ax3.set_ylabel("Pass %")
        ax3.grid(axis="y", alpha=0.3)
        st.pyplot(fig3)
        plt.close(fig3)

    with col_table:
        st.subheader("Summary Table")
        display_df = summary_df.copy()
        display_df["Semester"] = display_df["Semester"].apply(lambda s: f"S{int(s)}")
        st.dataframe(display_df, use_container_width=True, hide_index=True, height=260)

    st.divider()

    # --- At Risk Students ---
    st.subheader("⚠️ At-Risk Students")
    st.caption("Students showing performance warning signs across semesters.")

    risk_df = get_at_risk_students(batch_df)

    if risk_df.empty:
        st.success("No at-risk students identified in this batch.")
    else:
        risk_types = risk_df["risk_type"].unique().tolist()

        rc1, rc2, rc3 = st.columns(3)
        consec = risk_df[risk_df["risk_type"] == "Consecutive Drop"]
        low = risk_df[risk_df["risk_type"] == "Low SGPA"]
        full = risk_df[risk_df["risk_type"] == "Full Backlog"]

        rc1.metric("Consecutive Drops", len(consec))
        rc2.metric("Low SGPA (< 5)", len(low))
        rc3.metric("Full Backlog Semester", len(full))

        st.dataframe(risk_df, use_container_width=True, hide_index=True)

    st.divider()

    # --- Individual Student Journey ---
    if len(semesters_available) >= 2:
        st.subheader("Individual Student Journey")

        selected_student = st.selectbox("Select Register No", get_student_list(batch_df),
                                        key="student_journey")
        journey_df = get_student_journey(batch_df, selected_student)

        if not journey_df.empty:
            fig4, ax4 = plt.subplots(figsize=(7, 3.2))
            ax4.plot(journey_df["semester"], journey_df["SGPA"],
                     marker="o", linewidth=2.2, color="#9467bd")
            for _, row in journey_df.iterrows():
                ax4.annotate(f"{row['SGPA']:.2f}", (row["semester"], row["SGPA"]),
                             textcoords="offset points", xytext=(0, 8),
                             ha="center", fontsize=9, color="#9467bd", fontweight="bold")
            ax4.set_xticks(journey_df["semester"])
            ax4.set_xticklabels([f"S{s}" for s in journey_df["semester"]])
            ax4.set_ylim(0, 10.5)
            ax4.yaxis.set_major_locator(mticker.MultipleLocator(1))
            ax4.set_ylabel("SGPA")
            ax4.set_title(f"{selected_student}", fontsize=11)
            ax4.grid(axis="y", alpha=0.3)
            st.pyplot(fig4)
            plt.close(fig4)


# ================================================================
# TAB 2 — SEMESTER DEEP DIVE
# ================================================================

with tab2:

    st.markdown(f"##### {selected_batch} — Semester {selected_sem_label} subject analysis")

    subj_df = get_subject_difficulty(batch_df, selected_sem)

    if subj_df.empty:
        st.info("No subject-level data for this semester. Subjects list may not be stored.")
        st.stop()

    lab_theory = get_lab_vs_theory(batch_df, selected_sem)

    # --- Lab vs Theory KPI ---
    if lab_theory:
        st.subheader("Lab vs Theory Pass Rate")
        lt1, lt2, lt3 = st.columns(3)
        lab = lab_theory.get("lab", {})
        theory = lab_theory.get("theory", {})

        lt1.metric("Theory subjects", theory.get("subject_count", 0))
        lt2.metric("Theory avg pass %", f"{theory.get('avg_pass_pct', 0)}%")
        lt3.metric("Lab avg pass %", f"{lab.get('avg_pass_pct', 0)}%")

    st.divider()

    # --- Subject pass% bar chart (hardest first) ---
    st.subheader("Subject Difficulty — Pass % (hardest first)")

    fig5, ax5 = plt.subplots(figsize=(10, 4))

    colors5 = []
    for _, row in subj_df.iterrows():
        if row["is_lab"]:
            colors5.append("#5DCAA5")   # teal for labs
        elif row["pass_pct"] < 60:
            colors5.append("#d62728")   # red for danger
        elif row["pass_pct"] < 80:
            colors5.append("#ff7f0e")   # amber for warning
        else:
            colors5.append("#2ca02c")   # green for good

    bars5 = ax5.barh(subj_df["subject_code"], subj_df["pass_pct"],
                     color=colors5, height=0.6, zorder=3)

    for bar, val in zip(bars5, subj_df["pass_pct"]):
        ax5.text(val + 0.5, bar.get_y() + bar.get_height() / 2,
                 f"{val}%", va="center", fontsize=8.5, fontweight="bold")

    ax5.axvline(75, color="gray", linestyle="--", linewidth=0.8, alpha=0.6, label="75%")
    ax5.set_xlim(0, 115)
    ax5.set_xlabel("Pass %")
    ax5.set_title(f"{selected_sem_label} — pass % by subject", fontsize=11)
    ax5.grid(axis="x", alpha=0.3)

    from matplotlib.patches import Patch
    legend_els = [
        Patch(facecolor="#d62728", label="Theory < 60%"),
        Patch(facecolor="#ff7f0e", label="Theory 60–80%"),
        Patch(facecolor="#2ca02c", label="Theory > 80%"),
        Patch(facecolor="#5DCAA5", label="Lab subject"),
    ]
    ax5.legend(handles=legend_els, fontsize=8, loc="lower right")
    plt.tight_layout()
    st.pyplot(fig5)
    plt.close(fig5)

    st.divider()

    # --- Grade distribution stacked bar ---
    st.subheader("Grade Distribution by Subject")

    grade_cols = [c for c in subj_df.columns if c.startswith("grade_")]
    grade_labels = [c.replace("grade_", "") for c in grade_cols]

    grade_colors_map = {
        "S": "#1a7e24", "A+": "#2ca02c", "A": "#52be80",
        "B+": "#a9dfbf", "B": "#d4efdf",
        "C+": "#fdebd0", "C": "#f5cba7",
        "D": "#f0a500", "P": "#85c1e9",
        "F": "#d62728"
    }

    fig6, ax6 = plt.subplots(figsize=(10, 4))
    bottom_vals = np.zeros(len(subj_df))

    for col, label in zip(grade_cols, grade_labels):
        vals = subj_df[col].values
        color = grade_colors_map.get(label, "#aaaaaa")
        ax6.bar(subj_df["subject_code"], vals, bottom=bottom_vals,
                color=color, label=label, width=0.6)
        bottom_vals += vals

    ax6.set_ylabel("Students")
    ax6.set_title(f"{selected_sem_label} — grade distribution", fontsize=11)
    ax6.legend(fontsize=7, ncol=10, loc="upper right")
    ax6.tick_params(axis="x", rotation=30)
    ax6.grid(axis="y", alpha=0.3)
    plt.tight_layout()
    st.pyplot(fig6)
    plt.close(fig6)

    st.divider()

    # --- Full subject table ---
    st.subheader("Full Subject Stats Table")
    display_subj = subj_df.copy()
    display_subj["type"] = display_subj["is_lab"].map({True: "Lab", False: "Theory"})
    show_cols = ["subject_code", "type", "appeared", "pass_count", "fail_count", "pass_pct"]
    st.dataframe(display_subj[show_cols], use_container_width=True, hide_index=True)


# ================================================================
# TAB 3 — CROSS COMPARISONS
# ================================================================

with tab3:

    # --- Cross-batch comparison ---
    st.subheader(f"Batch vs Batch — {selected_sem_label} in {department}")
    st.caption("Same semester, different admission years. Valid comparison — same subject set.")

    batch_comp_df = get_batch_comparison(dept_df, selected_sem)

    if batch_comp_df.empty:
        st.info("No data for this semester across other batches.")
    else:
        fig7, ax7 = plt.subplots(figsize=(8, 3.5))
        bar_colors7 = ["#4C72B0" if b == selected_batch else "#aec7e8"
                       for b in batch_comp_df["batch"]]
        bars7 = ax7.bar(batch_comp_df["batch"], batch_comp_df["Avg SGPA"],
                        color=bar_colors7, width=0.5, zorder=3)
        for bar, val in zip(bars7, batch_comp_df["Avg SGPA"]):
            ax7.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 0.1,
                     f"{val}", ha="center", va="bottom", fontsize=9, fontweight="bold")
        ax7.set_ylabel("Avg SGPA")
        ax7.set_ylim(0, 10.5)
        ax7.set_title(f"{department} — {selected_sem_label} avg SGPA by batch", fontsize=11)
        ax7.grid(axis="y", alpha=0.3)
        st.pyplot(fig7)
        plt.close(fig7)

        st.dataframe(batch_comp_df, use_container_width=True, hide_index=True)

    st.divider()

    # --- Lateral vs Regular ---
    st.subheader(f"Lateral vs Regular — {selected_batch}")
    st.caption("Lateral students (LCMA prefix) join at S3. Comparison starts from S3.")

    lat_df = get_lateral_vs_regular(batch_df)

    if lat_df.empty or lat_df["Lateral Avg"].dropna().empty:
        st.info("No lateral entry students in this batch or no data yet.")
    else:
        fig8, ax8 = plt.subplots(figsize=(7, 3.5))
        valid = lat_df.dropna(subset=["Regular Avg"])
        sem_labels = [f"S{s}" for s in valid["Semester"]]

        ax8.plot(sem_labels, valid["Regular Avg"], marker="o", linewidth=2,
                 color="#4C72B0", label="Regular")

        lat_valid = lat_df.dropna(subset=["Lateral Avg"])
        if not lat_valid.empty:
            lat_labels = [f"S{s}" for s in lat_valid["Semester"]]
            ax8.plot(lat_labels, lat_valid["Lateral Avg"], marker="s", linewidth=2,
                     color="#ff7f0e", linestyle="--", label="Lateral")

        ax8.set_ylim(0, 10.5)
        ax8.yaxis.set_major_locator(mticker.MultipleLocator(1))
        ax8.set_ylabel("Avg SGPA")
        ax8.set_title(f"{selected_batch} — regular vs lateral", fontsize=11)
        ax8.legend(fontsize=9)
        ax8.grid(axis="y", alpha=0.3)
        st.pyplot(fig8)
        plt.close(fig8)

        st.dataframe(lat_df, use_container_width=True, hide_index=True)

    st.divider()

    # --- Cross-department comparison ---
    st.subheader(f"Department Comparison — {selected_batch} in {selected_sem_label}")
    st.caption("Same batch year, same semester — all departments side by side.")

    cross_dept_df = get_cross_dept_comparison(df, selected_batch, selected_sem)

    if cross_dept_df.empty:
        st.info("No other departments have data for this batch and semester.")
    else:
        fig9, ax9 = plt.subplots(figsize=(8, 3.5))
        dept_colors = ["#4C72B0" if d == department else "#aec7e8"
                       for d in cross_dept_df["Department"]]
        bars9 = ax9.bar(
            [d[:6] for d in cross_dept_df["Department"]],
            cross_dept_df["Avg SGPA"],
            color=dept_colors, width=0.5, zorder=3
        )
        for bar, val, dept in zip(bars9, cross_dept_df["Avg SGPA"], cross_dept_df["Department"]):
            ax9.text(bar.get_x() + bar.get_width() / 2, bar.get_height() + 0.1,
                     f"{val}", ha="center", va="bottom", fontsize=9, fontweight="bold")
        ax9.set_ylabel("Avg SGPA")
        ax9.set_ylim(0, 10.5)
        ax9.set_title(
            f"All depts — batch {selected_batch}, {selected_sem_label}  (highlighted: {department[:6]})",
            fontsize=10
        )
        ax9.grid(axis="y", alpha=0.3)
        st.pyplot(fig9)
        plt.close(fig9)

        st.dataframe(cross_dept_df, use_container_width=True, hide_index=True)