
def get_batch(student: dict):
    """
    Returns batch in format: 2023-2027

    Priority:
    1. Use existing batch if present
    2. Use admission_year
    3. Extract from reg_no
    """

    # 🔹 1. If batch already exists (BEST CASE)
    batch = student.get("batch")
    if batch and isinstance(batch, str) and "-" in batch:
        return batch.strip()

    # 🔹 2. If admission_year exists
    admission_year = student.get("admission_year")
    if admission_year:
        try:
            admission_year = int(admission_year)
            return f"{admission_year}-{admission_year + 4}"
        except (ValueError, TypeError):
            pass

    # 🔹 3. Fallback → extract from reg_no
    reg_no = student.get("reg_no") or student.get("register_number")

    if reg_no and len(str(reg_no)) >= 4:
        try:
            year = int(str(reg_no)[:4])
            return f"{year}-{year + 4}"
        except ValueError:
            pass

    return "N/A"


# 🔥 OPTIONAL (USED BY DETECTOR)

def get_batch_year(student: dict):
    """
    Returns only starting year (e.g., 2023)
    Used for histogram/dominant batch detection
    """

    batch = get_batch(student)

    if batch and batch != "N/A":
        try:
            return int(batch.split("-")[0])
        except:
            pass

    return None