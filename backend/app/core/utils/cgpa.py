# utils/cgpa.py

def calculate_cgpa_for_student(db, reg_no):
    """
    Calculates final cumulative CGPA for a student
    using all available semester records.
    """

    collection = db["Result"]

    semesters = list(
        collection.find({"reg_no": reg_no})
        .sort("semester", 1)
    )

    total_weighted_points = 0
    total_credits = 0

    for sem in semesters:
        sgpa = sem.get("SGPA", 0)
        credits = sem.get("total_credits", 0)

        total_weighted_points += sgpa * credits
        total_credits += credits

    if total_credits == 0:
        return 0

    return round(total_weighted_points / total_credits, 2)


# -------------------------------------------------------------
# PROGRESSIVE CGPA (CUMULATIVE AFTER EACH SEMESTER)
# -------------------------------------------------------------

def get_cgpa_progression(db, reg_no):
    """
    Returns cumulative CGPA after each semester.
    Useful for academic growth charts.
    """

    collection = db["Result"]

    semesters = list(
        collection.find({"reg_no": reg_no})
        .sort("semester", 1)
    )

    total_weighted_points = 0
    total_credits = 0
    progression = []

    for sem in semesters:
        sgpa = sem.get("SGPA", 0)
        credits = sem.get("total_credits", 0)
        semester_number = sem.get("semester")

        total_weighted_points += sgpa * credits
        total_credits += credits

        if total_credits == 0:
            cgpa = 0
        else:
            cgpa = round(total_weighted_points / total_credits, 2)

        progression.append({
            "semester": semester_number,
            "cgpa": cgpa
        })

    return progression


# -------------------------------------------------------------
# DEPARTMENT  CGPA CALCULATION FOR STUDENTS
# -------------------------------------------------------------

def calculate_cgpa_for_student(db, reg_no, department):
    """
    Calculates CGPA for a student
    within a specific department.
    """

    collection = db["Result"]

    semesters = list(
        collection.find({
            "reg_no": reg_no,
            "department": department
        }).sort("semester", 1)
    )

    total_weighted_points = 0
    total_credits = 0

    for sem in semesters:
        sgpa = sem.get("SGPA", 0)
        credits = sem.get("total_credits", 0)

        total_weighted_points += sgpa * credits
        total_credits += credits

    if total_credits == 0:
        return 0

    return round(total_weighted_points / total_credits, 2)


# -------------------------------------------------------------
# OPTIONAL: STORE CGPA IN SEPARATE COLLECTION
# (Only if you decide to persist CGPA later)
# -------------------------------------------------------------

def update_student_profile_cgpa(db, reg_no):
    """
    Calculates and stores CGPA in a separate Student_Profile collection.
    This is optional and not required for dynamic calculation.
    """

    cgpa = calculate_cgpa_for_student(db, reg_no)

    profile_collection = db["Student_Profile"]

    profile_collection.update_one(
        {"reg_no": reg_no},
        {"$set": {"CGPA": cgpa}},
        upsert=True
    )

    return cgpa