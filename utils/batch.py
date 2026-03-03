def extract_batch_from_reg_no(reg_no: str):
    """
    Extract admission year and batch range.
    Example:
    2024CS001 → 2024, "2024-2028"
    """

    if not reg_no or len(reg_no) < 4:
        return None, None

    try:
        admission_year = int(reg_no[:4])
        batch_end_year = admission_year + 4
        return admission_year, f"{admission_year}-{batch_end_year}"

    except ValueError:
        return None, None