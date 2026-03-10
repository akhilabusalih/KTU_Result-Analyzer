import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, HRFlowable, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors as rl_colors
from reportlab.lib.units import inch
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.units import mm

from openpyxl.drawing.image import Image as XLImage
from reportlab.platypus import Image

# --- HELPER DATA & FUNCTIONS ---

def safe_float(val):
    try:
        val_str = str(val).strip()
        if val_str == "" or val_str.lower() == "nan" or val_str == "None":
            return 0.0
        return float(val)
    except (ValueError, TypeError):
        return 0.0


def get_backlogs(row, columns):
    count = 0
    for col in columns:
        if col in ['Register No', 'SGPA', 'Backlogs']:
            continue
        val = str(row.get(col, '')).strip()
        if val in FAIL_GRADES:
            count += 1
    return count


EXCEL_COLORS = {
    'S': '90EE90', 'A+': '228B22', 'A': '98FB98', 'B+': 'FFFF00',
    'B': 'FFD700', 'C+': 'FFA500', 'C': 'FF8C00', 'D': 'FA8072',
    'P': 'ADD8E6', 'F': 'FF0000', 'FE': 'FF0000', 'Absent': 'FF0000', 'XX': 'FF0000'
}

PDF_COLORS = {k: rl_colors.HexColor(f"#{v}") for k, v in EXCEL_COLORS.items()}
FAIL_GRADES = {'F', 'FE', 'Absent', 'XX'}

THIN_BORDER = Border(left=Side(style='thin'), right=Side(style='thin'), top=Side(style='thin'),
                     bottom=Side(style='thin'))
CENTER_ALIGN = Alignment(horizontal="center", vertical="center")
BOLD_FONT = Font(bold=True)
HEADER_FILL = PatternFill(start_color="E0E0E0", end_color="E0E0E0", fill_type="solid")
RISK_RED_FILL = PatternFill(start_color="FFCCCC", fill_type="solid")
RISK_YELLOW_FILL = PatternFill(start_color="FFFFE0", fill_type="solid")


# ==========================================
# EXCEL GENERATION (Unchanged - Perfect)
# ==========================================
def generate_excel_report(df, analysis_df, output_path, report_id, qr_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    df = df.fillna("")
    df['Backlogs'] = df.apply(lambda row: get_backlogs(row, df.columns), axis=1)

    wb = Workbook()
    ws = wb.active
    ws.title = "Result Analysis"

    ws.merge_cells("A1:J1")
    cell_a1 = ws["A1"]
    cell_a1.value = "CARMEL COLLEGE OF ENGINEERING AND TECHNOLOGY"
    cell_a1.font = Font(size=16, bold=True, color="000000")
    cell_a1.alignment = CENTER_ALIGN
    cell_a1.fill = HEADER_FILL
    ws.row_dimensions[1].height = 25

    ws.merge_cells("A2:J2")
    cell_a2 = ws["A2"]
    cell_a2.value = "Result Analysis Report"
    cell_a2.font = Font(size=14, bold=True, color="555555")
    cell_a2.alignment = CENTER_ALIGN
    cell_a2.fill = HEADER_FILL
    ws.row_dimensions[2].height = 20

    current_row = 4
    ws.merge_cells("A3:J3")

    cell_a3 = ws["A3"]
    cell_a3.value = f"Report ID: {report_id}"
    cell_a3.font = Font(size=11, bold=True)
    cell_a3.alignment = CENTER_ALIGN

    if qr_path and os.path.exists(qr_path):
        qr_img = XLImage(qr_path)

        qr_img.width = 90
        qr_img.height = 90

        ws.add_image(qr_img, "K1")

    ws["K6"] = "Scan QR code to verify authenticity of this report"
    ws["K6"].font = Font(size=10, bold=True)
    ws["K6"].alignment = Alignment(horizontal="center")

    ws.cell(row=current_row, column=1, value="RESULT OVERVIEW").font = Font(size=12, bold=True, underline="single")
    current_row += 1

    sgpa_list = [safe_float(x) for x in df["SGPA"]]
    subject_cols = [c for c in df.columns if c not in ['Register No', 'SGPA', 'Backlogs']]
    avg_sgpa = round(sum(sgpa_list) / len(sgpa_list), 2) if sgpa_list else 0

    metrics = [
        ("Total Students", len(df)),
        ("Total Subjects", len(subject_cols)),
        ("Average SGPA", avg_sgpa),
        ("Highest SGPA", round(max(sgpa_list), 2) if sgpa_list else 0),
        ("Lowest SGPA", round(min(sgpa_list), 2) if sgpa_list else 0),
        ("Total Failures (SGPA=0)", sum(1 for s in sgpa_list if s == 0)),
    ]

    for m, v in metrics:
        c1 = ws.cell(row=current_row, column=1, value=m)
        c2 = ws.cell(row=current_row, column=2, value=v)
        c1.border = THIN_BORDER
        c2.border = THIN_BORDER
        c2.alignment = CENTER_ALIGN
        c1.fill = PatternFill(start_color="F5F5F5", fill_type="solid")
        ws.row_dimensions[current_row].height = 18
        current_row += 1

    current_row += 2

    ws.cell(row=current_row, column=1, value="STUDENT RESULTS").font = Font(size=12, bold=True, underline="single")
    current_row += 1

    headers = df.columns.tolist()
    for col_idx, header_text in enumerate(headers, 1):
        cell = ws.cell(row=current_row, column=col_idx, value=header_text)
        cell.font = BOLD_FONT
        cell.border = THIN_BORDER
        cell.alignment = CENTER_ALIGN
        cell.fill = HEADER_FILL
    ws.row_dimensions[current_row].height = 20
    current_row += 1

    for _, row_data in df.iterrows():
        sgpa = safe_float(row_data.get("SGPA", 0))

        row_fill = None
        if sgpa == 0:
            row_fill = RISK_RED_FILL
        elif 0 < sgpa < 5.0:
            row_fill = RISK_YELLOW_FILL

        for col_idx, header in enumerate(headers, 1):
            val = row_data[header]
            cell = ws.cell(row=current_row, column=col_idx, value=val)
            cell.border = THIN_BORDER
            cell.alignment = CENTER_ALIGN

            if row_fill:
                cell.fill = row_fill

            if header == "Register No":
                cell.font = Font(bold=True, color="FF0000" if sgpa == 0 else "000000")
            elif header == "SGPA":
                cell.font = BOLD_FONT

            if header in subject_cols:
                str_val = str(val).strip()
                if str_val in EXCEL_COLORS and str_val not in FAIL_GRADES:
                    cell.fill = PatternFill(start_color=EXCEL_COLORS[str_val], fill_type="solid")
                elif str_val in FAIL_GRADES:
                    cell.font = Font(color="FF0000", bold=True)

        ws.row_dimensions[current_row].height = 18
        current_row += 1

    current_row += 2

    ws.cell(row=current_row, column=1, value="TOP PERFORMERS").font = Font(size=12, bold=True, underline="single")
    current_row += 1

    top_df = df.copy()
    top_df["SGPA_Num"] = top_df["SGPA"].apply(safe_float)
    top_df = top_df[top_df["SGPA_Num"] > 0]
    top = top_df.sort_values("SGPA_Num", ascending=False).head(3)

    topper_headers = ["Rank", "Register No", "SGPA"]
    for col_idx, h in enumerate(topper_headers, 1):
        cell = ws.cell(row=current_row, column=col_idx, value=h)
        cell.font = BOLD_FONT
        cell.border = THIN_BORDER
        cell.fill = HEADER_FILL
        cell.alignment = CENTER_ALIGN
    ws.row_dimensions[current_row].height = 20
    current_row += 1

    rank = 1
    for _, student in top.iterrows():
        vals = [rank, student["Register No"], student["SGPA"]]
        for col_idx, val in enumerate(vals, 1):
            cell = ws.cell(row=current_row, column=col_idx, value=val)
            cell.border = THIN_BORDER
            cell.alignment = CENTER_ALIGN
            if col_idx == 1: cell.font = BOLD_FONT
        ws.row_dimensions[current_row].height = 18
        rank += 1
        current_row += 1

    current_row += 2

    ws.cell(row=current_row, column=1, value="SUBJECT PERFORMANCE ANALYSIS").font = Font(size=12, bold=True,
                                                                                         underline="single")
    current_row += 1

    analysis_headers = analysis_df.columns.tolist()
    for col_idx, h in enumerate(analysis_headers, 1):
        cell = ws.cell(row=current_row, column=col_idx, value=h)
        cell.font = BOLD_FONT
        cell.border = THIN_BORDER
        cell.fill = HEADER_FILL
        cell.alignment = CENTER_ALIGN
        if len(h) <= 2 and h not in ['S', 'P', 'F']:
            cell.alignment = Alignment(horizontal="center", vertical="center", textRotation=0)

    ws.row_dimensions[current_row].height = 25
    current_row += 1

    for _, row_data in analysis_df.iterrows():
        for col_idx, h in enumerate(analysis_headers, 1):
            val = row_data[h]
            cell = ws.cell(row=current_row, column=col_idx, value=val)
            cell.border = THIN_BORDER
            cell.alignment = CENTER_ALIGN
            if h == "Pass %":
                try:
                    pass_perc = float(str(val).replace('%', ''))
                    if pass_perc < 50:
                        cell.font = Font(color="FF0000", bold=True)
                    elif pass_perc > 90:
                        cell.font = Font(color="008000", bold=True)
                except:
                    pass

        ws.row_dimensions[current_row].height = 18
        current_row += 1

    for col_idx, col_cells in enumerate(ws.columns, start=1):
        max_length = 0
        col_letter = get_column_letter(col_idx)
        for cell in col_cells:
            if cell.row <= 2: continue
            try:
                val_len = len(str(cell.value)) if cell.value else 0
                if val_len > max_length: max_length = val_len
            except:
                pass
        adjusted_width = (max_length + 2) * 1.1
        final_width = min(adjusted_width, 30)
        if col_idx == 1: final_width = max(final_width, 14)
        ws.column_dimensions[col_letter].width = final_width

    wb.save(output_path)
    return output_path


# ==========================================
# PDF GENERATION (Fixed Margins & Removed Page Breaks)
# ==========================================
def generate_pdf_report(df, analysis_df, output_path,  report_id, qr_path):
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    df = df.fillna("")
    df['Backlogs'] = df.apply(lambda row: get_backlogs(row, df.columns), axis=1)

    # Document Geometry
    LEFT_MARGIN = 0.75 * inch
    RIGHT_MARGIN = 0.75 * inch
    AVAILABLE_WIDTH = A4[0] - LEFT_MARGIN - RIGHT_MARGIN

    # FIX 1: Reduced top margin from 0.75 to 0.4 inches
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=LEFT_MARGIN,
        rightMargin=RIGHT_MARGIN,
        topMargin=0.4 * inch,
        bottomMargin=0.5 * inch
    )

    report_id_style = ParagraphStyle(
        "ReportID",
        fontSize=11,
        alignment=TA_CENTER,
        spaceAfter=8
    )

    styles = getSampleStyleSheet()
    title_style = ParagraphStyle('TitleSt', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=18, leading=22,
                                 spaceAfter=10, alignment=0)
    subtitle_style = ParagraphStyle('SubSt', parent=styles['Heading2'], fontName='Helvetica', fontSize=14, alignment=0,
                                    spaceAfter=20, textColor=rl_colors.dimgrey)
    section_header = ParagraphStyle('SectH', parent=styles['Heading3'], fontName='Helvetica-Bold', fontSize=12,
                                    spaceBefore=15, spaceAfter=10, textColor=rl_colors.navy, alignment=0)

    table_body_style = ParagraphStyle('TabBody', parent=styles['Normal'], fontName='Helvetica', fontSize=8, leading=10,
                                      alignment=1)
    table_header_style = ParagraphStyle('TabHead', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=8,
                                        leading=10, alignment=1, textColor=rl_colors.white)

    tiny_body_style = ParagraphStyle('TinyBody', parent=styles['Normal'], fontName='Helvetica', fontSize=6.5, leading=8,
                                     alignment=1)
    tiny_header_style = ParagraphStyle('TinyHead', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=6.5,
                                       leading=8, alignment=1, textColor=rl_colors.white)

    elements = []

    # --- 1. HEADER ---
    elements.append(Paragraph("CARMEL COLLEGE OF ENGINEERING AND TECHNOLOGY", title_style))
    elements.append(Paragraph("Result Analysis Report", subtitle_style))
    elements.append(HRFlowable(width="100%", thickness=2, color=rl_colors.navy, hAlign='LEFT'))
    elements.append(Spacer(1, 15))

    elements.append(
        Paragraph(f"<b>Report ID: {report_id}</b>", report_id_style)
    )

    elements.append(Spacer(1, 8))

    qr_img = Image(qr_path, width=80, height=80)
    elements.append(qr_img)
    elements.append(Spacer(1, 5))

    elements.append(
        Paragraph(
            "Scan QR code to verify authenticity of this report",
            styles["Normal"]
        )
    )

    # --- 2. RESULT OVERVIEW ---
    sgpa_list = [safe_float(x) for x in df["SGPA"]]
    subject_cols = [c for c in df.columns if c not in ['Register No', 'SGPA', 'Backlogs']]
    avg_sgpa = round(sum(sgpa_list) / len(sgpa_list), 2) if sgpa_list else 0

    overview_data = [
        ["Metric", "Value"],
        ["Total Students", str(len(df))],
        ["Total Subjects", str(len(subject_cols))],
        ["Average SGPA", str(avg_sgpa)],
        ["Highest SGPA", str(round(max(sgpa_list), 2) if sgpa_list else 0)],
        ["Lowest SGPA", str(round(min(sgpa_list), 2) if sgpa_list else 0)],
        ["FAILURES (SGPA 0)", str(sum(1 for s in sgpa_list if s == 0))],
    ]

    elements.append(Paragraph("RESULT OVERVIEW", section_header))

    overview_style = TableStyle([
        ('BACKGROUND', (0, 0), (1, 0), rl_colors.navy),
        ('TEXTCOLOR', (0, 0), (1, 0), rl_colors.white),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 10),
        ('ALIGN', (1, 1), (-1, -1), 'CENTER'),
        ('GRID', (0, 0), (-1, -1), 0.5, rl_colors.grey),
        ('BACKGROUND', (0, 1), (0, -1), rl_colors.whitesmoke),
        ('FONTNAME', (0, 1), (0, -1), 'Helvetica-Bold'),
    ])

    ov_table = Table(overview_data, colWidths=[150, 100], hAlign='LEFT')
    ov_table.setStyle(overview_style)
    elements.append(ov_table)
    elements.append(Spacer(1, 20))

    # --- 3. STUDENT RESULTS TABLE ---
    elements.append(Paragraph("STUDENT RESULTS", section_header))

    headers_wrapped = [Paragraph(h, table_header_style) for h in df.columns]
    processed_data = []
    row_styles = []

    for i, (index, row) in enumerate(df.iterrows()):
        sgpa = safe_float(row.get("SGPA", 0))
        bg_color = rl_colors.white
        reg_no_color = rl_colors.black

        if sgpa == 0:
            bg_color = rl_colors.HexColor('#FFCCCC')
            reg_no_color = rl_colors.red
        elif 0 < sgpa < 5.0:
            bg_color = rl_colors.HexColor('#FFFFE0')

        row_styles.append(('BACKGROUND', (0, i + 1), (-1, i + 1), bg_color))

        processed_row = []
        for j, col_name in enumerate(df.columns):
            val = str(row[col_name]).strip()
            cell_style = table_body_style

            if col_name == "Register No":
                cell_style = ParagraphStyle('RegSt', parent=table_body_style, fontName='Helvetica-Bold',
                                            textColor=reg_no_color)
            elif col_name in subject_cols:
                if val in PDF_COLORS and val not in FAIL_GRADES:
                    row_styles.append(('BACKGROUND', (j, i + 1), (j, i + 1), PDF_COLORS[val]))
                elif val in FAIL_GRADES:
                    cell_style = ParagraphStyle('FailSt', parent=table_body_style, fontName='Helvetica-Bold',
                                                textColor=rl_colors.red)

            processed_row.append(Paragraph(val, cell_style))
        processed_data.append(processed_row)

    full_table_data = [headers_wrapped] + processed_data

    num_cols = len(df.columns)
    reg_w = 70
    sgpa_w = 35
    back_w = 40
    rem_w = AVAILABLE_WIDTH - reg_w - sgpa_w - back_w
    subj_count = max(1, num_cols - 3)
    subj_w = rem_w / subj_count

    col_widths_list = [reg_w] + [subj_w] * subj_count + [sgpa_w, back_w]

    base_commands = [
        ('BACKGROUND', (0, 0), (-1, 0), rl_colors.navy),
        ('GRID', (0, 0), (-1, -1), 0.5, rl_colors.grey),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 2),
        ('RIGHTPADDING', (0, 0), (-1, -1), 2),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('REPEATROWS', (0, 0), (0, 0))
    ]

    student_table = Table(full_table_data, colWidths=col_widths_list, hAlign='LEFT', repeatRows=1)
    student_table.setStyle(TableStyle(base_commands + row_styles))
    elements.append(student_table)

    # FIX 2: Replaced PageBreak() with a clean Spacer
    elements.append(Spacer(1, 30))

    # --- 4. TOP PERFORMERS ---
    elements.append(Paragraph("TOP PERFORMERS", section_header))

    top_df = df.copy()
    top_df["SGPA_Num"] = top_df["SGPA"].apply(safe_float)
    top_df = top_df[top_df["SGPA_Num"] > 0]
    top = top_df.sort_values("SGPA_Num", ascending=False).head(3)

    topper_data = [[Paragraph(h, table_header_style) for h in ["Rank", "Register No", "SGPA"]]]
    for i, (idx, row) in enumerate(top.iterrows(), 1):
        topper_data.append([
            Paragraph(str(i), table_body_style),
            Paragraph(row["Register No"], table_body_style),
            Paragraph(str(row["SGPA"]), table_body_style)
        ])

    topper_table = Table(topper_data, colWidths=[50, 120, 60], hAlign='LEFT')
    topper_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), rl_colors.navy),
        ('GRID', (0, 0), (-1, -1), 0.5, rl_colors.grey),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    elements.append(topper_table)
    elements.append(Spacer(1, 20))

    # --- 5. SUBJECT ANALYSIS ---
    elements.append(Paragraph("SUBJECT PERFORMANCE ANALYSIS", section_header))

    ana_headers = [Paragraph(h, tiny_header_style) for h in analysis_df.columns]
    ana_data = []
    for _, row in analysis_df.iterrows():
        processed_row = []
        for val in row:
            style = tiny_body_style
            val_str = str(val)
            if "%" in val_str:
                try:
                    perc = float(val_str.strip('%'))
                    if perc < 50:
                        style = ParagraphStyle('BadPerc', parent=tiny_body_style, textColor=rl_colors.red)
                    elif perc > 90:
                        style = ParagraphStyle('GoodPerc', parent=tiny_body_style, textColor=rl_colors.green)
                except:
                    pass
            processed_row.append(Paragraph(val_str, style))
        ana_data.append(processed_row)

    full_ana_data = [ana_headers] + ana_data

    ana_cols = len(analysis_df.columns)
    if ana_cols > 1:
        subj_w = 90
        rem_w = AVAILABLE_WIDTH - subj_w
        other_w = rem_w / (ana_cols - 1)
        ana_col_widths = [subj_w] + [other_w] * (ana_cols - 1)
    else:
        ana_col_widths = [AVAILABLE_WIDTH]

    ana_table = Table(full_ana_data, colWidths=ana_col_widths, hAlign='LEFT', repeatRows=1)
    ana_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), rl_colors.navy),
        ('GRID', (0, 0), (-1, -1), 0.5, rl_colors.grey),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 1),
        ('RIGHTPADDING', (0, 0), (-1, -1), 1),
        ('REPEATROWS', (0, 0), (0, 0))
    ]))
    elements.append(ana_table)

    doc.build(elements)
    return output_path