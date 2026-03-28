def clean_students_and_subjects(students):
    """
    Removes subject columns that have no valid grades
    after student filtering.

    Works with subject list format:
    [
        {"subject_code": "...", "grade": "..."}
    ]
    """

    if not students:
        return [], []

    # 🔹 Step 1: Collect all subject codes
    all_subjects = set()

    for student in students:
        for subject in student.get("subjects", []):
            all_subjects.add(subject["subject_code"])

    # 🔹 Step 2: Find valid subjects (at least one meaningful grade)
    valid_subjects = []

    for subject_code in all_subjects:
        has_value = False

        for student in students:
            for subject in student.get("subjects", []):
                if subject["subject_code"] == subject_code:
                    grade = subject.get("grade")

                    if grade not in [None, "", "-", " "]:
                        has_value = True
                        break

            if has_value:
                break

        if has_value:
            valid_subjects.append(subject_code)

    # 🔹 Step 3: Clean each student's subject list
    cleaned_students = []

    for student in students:
        cleaned_subjects = []

        for subject in student.get("subjects", []):
            if subject["subject_code"] in valid_subjects:
                cleaned_subjects.append(subject)

        student["subjects"] = cleaned_subjects
        cleaned_students.append(student)

    return cleaned_students, valid_subjects