# utils/student_filter.py

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

    for student in students:
        # 🔹 Normalize register number
        reg_no = student.get("reg_no") or student.get("register_number")

        if not reg_no:
            skipped_students.append("UNKNOWN")
            continue

        reg_no = str(reg_no).strip().upper()
        student["reg_no"] = reg_no

        # 🔹 Fetch student from DB
        db_student = student_collection.find_one({"reg_no": reg_no})

        if not db_student:
            print(f"❌ Not found in DB: {reg_no}")
            skipped_students.append(reg_no)
            continue

        # 🔹 Batch matching (ROBUST FIX)
        db_batch = db_student.get("batch", "")
        db_batch_year = db_batch.split("-")[0] if db_batch else ""

        if db_batch_year != selected_batch:
            print(f"⚠️ Skipped (batch mismatch): {reg_no} | DB: {db_batch} | Expected: {selected_batch}")
            skipped_students.append(reg_no)
            continue

        # 🔹 Name mapping (SAFE)
        name = db_student.get("name")

        if not name or str(name).strip() == "":
            print(f"⚠️ Missing name for {reg_no}")
            name = "Unknown"

        student["name"] = name

        # 🔹 (Optional) attach extra info if needed
        student["batch"] = db_batch
        student["branch"] = db_student.get("branch")

        # ✅ Add to valid list
        valid_students.append(student)

    print(f"✅ Valid students: {len(valid_students)}")
    print(f"❌ Skipped students: {len(skipped_students)}")

    return valid_students, skipped_students