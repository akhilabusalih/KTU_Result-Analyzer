# utils/student_filter.py

def _normalize_batch_year(batch_value):
    """
    Normalize batch values like 2023, "2023", or "2023-2027"
    to a comparable admission year string.
    """
    if batch_value is None:
        return ""

    batch_text = str(batch_value).strip()
    if not batch_text:
        return ""

    return batch_text.split("-")[0]


def filter_students_by_batch(db, students, selected_batch):
    """
    Filters students based on batch and enriches them with name from Student_data.

    Fixes:
    - Batch mismatch (e.g., 2023 vs 2023-2027)
    - Missing names
    - Register number formatting issues
    """

    student_collection = db["Student_data"]

    valid_students = []
    skipped_students = []
    selected_batch_year = _normalize_batch_year(selected_batch)

    for student in students:
        # 🔹 Get register number
        reg_no = student.get("reg_no") or student.get("register_number")

        # ❌ Remove students without register number
        if not reg_no:
            print("❌ Missing register number → removed")
            skipped_students.append("UNKNOWN")
            continue

        reg_no = str(reg_no).strip().upper()
        student["reg_no"] = reg_no

        # 🔹 Fetch from DB
        db_student = student_collection.find_one({"reg_no": reg_no})

        # ❌ Remove if not in DB
        if not db_student:
            print(f"❌ Not found in DB → removed: {reg_no}")
            skipped_students.append(reg_no)
            continue

        # 🔹 Batch check
        db_batch = db_student.get("batch", "")
        db_batch_year = _normalize_batch_year(db_batch)

        # ❌ Remove if batch mismatch
        if selected_batch_year and db_batch_year != selected_batch_year:
            print(f"❌ Batch mismatch → removed: {reg_no} | DB: {db_batch} | Expected: {selected_batch}")
            skipped_students.append(reg_no)
            continue

        # ✅ VALID STUDENT
        student["name"] = db_student.get("name", "Unknown")
        student["batch"] = db_batch
        student["branch"] = db_student.get("branch")

        valid_students.append(student)

    print(f"✅ Valid students: {len(valid_students)}")
    print(f"❌ Skipped students: {len(skipped_students)}")

    return valid_students, skipped_students
