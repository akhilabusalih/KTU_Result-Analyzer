from collections import Counter


def extract_batch_from_reg(reg_no):
    """
    Extracts batch year from register number
    Example: CMA23CS001 → 2023
    """
    try:
        year = reg_no[3:5]
        return "20" + year
    except:
        return None


def detect_dominant_batch(students):
    """
    Detects the dominant batch from parsed students

    Args:
        students: list of student dicts

    Returns:
        dominant_batch (str), batch_distribution (dict)
    """

    batches = []

    for student in students:
        reg_no = student.get("reg_no")
        batch = extract_batch_from_reg(reg_no)

        if batch:
            batches.append(batch)

    if not batches:
        return None, {}

    batch_count = Counter(batches)

    dominant_batch = batch_count.most_common(1)[0][0]

    return dominant_batch, dict(batch_count)