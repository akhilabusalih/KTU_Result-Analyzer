def build_course_map(subj_cols, db=None):
    if not subj_cols:
        return []

    # 🔹 Normalize input codes
    normalized_cols = [c.strip().upper() for c in subj_cols]

    subject_names = {}

    if db is not None:
        docs = db["Subject_Grade"].find(
            {},
            {"_id": 0, "subject_code": 1, "subject_name": 1},
        )

        # 🔹 Normalize DB values
        subject_names = {
            str(doc.get("subject_code", "")).strip().upper(): doc.get("subject_name", "")
            for doc in docs
        }

    return [
        (code, subject_names.get(code.strip().upper(), "—"))
        for code in subj_cols
    ]