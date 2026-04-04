from collections import Counter
from app.core.utils.batch import get_batch


def detect_dominant_batch(students):
    """
    Detects the dominant batch from parsed students
    """

    batches = []

    for student in students:
        batch = get_batch(student)

        if batch and batch != "N/A":
            year = batch.split("-")[0]  # extract year
            batches.append(year)

    if not batches:
        return None, {}

    batch_count = Counter(batches)

    dominant_year = batch_count.most_common(1)[0][0]

    # Convert to full batch
    dominant_batch = f"{dominant_year}-{int(dominant_year) + 4}"

    return dominant_batch, dict(batch_count)