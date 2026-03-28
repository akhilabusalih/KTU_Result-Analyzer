# Result Analyzer Project Walkthrough

## 1. What This Project Is

This project is a multi-page Streamlit application for analyzing university result PDFs, mainly KTU-style department result sheets.

At a high level, it does five things:

1. Accepts a result PDF upload.
2. Extracts department-wise student grades from the PDF.
3. Computes SGPA using subject-credit metadata stored in MongoDB.
4. Stores processed results and metadata in MongoDB for later comparison and reporting.
5. Presents multiple downstream views:
   - immediate result analysis
   - historical analytics
   - exportable reports
   - report verification
   - issue reporting
   - an AI chatbot page


## 2. High-Level Architecture

The codebase is organized into:

- `app.py`
  - landing page and startup cleanup
- `pages/`
  - Streamlit multipage UI
- `utils/`
  - parsing, SGPA, database, analytics, chatbot, report generation, report verification
- `core.py`
  - orchestration layer for processing one department from one PDF
- `config.py`
  - environment loading and grade mappings
- `analysis.py`
  - older helper functions for ranking and summary calculations

The main runtime dependency chain is:

`Upload page -> parser -> core -> sgpa -> db -> Result page -> report generator / analytics / verification`


## 3. End-to-End Flow

### 3.1 App Startup

When Streamlit starts on `app.py`, the app:

- clears top-level files inside `uploads/`
- clears top-level files inside `outputs/`
- leaves nested folders like `outputs/qr/` untouched
- renders the landing page and sidebar-driven navigation

So the landing page is both a UI entry point and a lightweight cleanup trigger.

### 3.2 Upload and Process

On `pages/1-upload.py`, the user:

1. uploads a PDF
2. the PDF is saved under `uploads/` with a UUID prefix
3. the entire PDF text is extracted
4. department names are detected using regex on `"[Full Time]"` sections
5. the user selects one department
6. `core.process_result_file(...)` parses students and calculates SGPA
7. duplicate uploads are checked in `Uploads_Metadata`
8. if confirmed, processed records are stored in MongoDB `Result`
9. metadata is stored in MongoDB `Uploads_Metadata`
10. the app switches to the result page

Important detail:

- one upload may contain multiple departments
- the current processing flow handles one selected department at a time

### 3.3 Result Analysis

On `pages/2-result.py`, the app:

- loads the latest processed upload via `st.session_state["last_upload_id"]`
- reconstructs a flat DataFrame from nested subject lists
- calculates arrears
- computes summary metrics
- builds subject-level pass/fail analysis
- draws charts
- shows toppers
- exports Excel, PDF, or HTML reports
- stores report verification metadata

### 3.4 Historical Analytics

On `pages/6-Advanced_Analytics.py`, the app:

- loads all records from MongoDB `Result`
- filters by department, batch, semester
- provides:
  - batch journey
  - semester deep dive
  - cross comparisons

This page is not limited to the latest upload. It uses historical stored data.

### 3.5 Report Verification

On `pages/8-report_verification.py`, the app:

- accepts a manual report ID or QR-provided `report_id`
- looks up the ID in `Report_Metadata`
- confirms whether the report is known to the system

### 3.6 Other Supporting Flows

- `pages/3-chatbot.py`
  - AI assistant over an uploaded PDF or CSV
- `pages/4-report.py`
  - issue submission form with attachments
- `pages/5-Subject_Configuration.py`
  - admin-like editor for subject-credit records
- `pages/7-Processed_Results.py`
  - overview table of processed dataset metadata


## 4. Root-Level Files

### `app.py`

Responsibility:

- landing page
- page config
- startup cleanup of `uploads/` and `outputs/`
- overall UI branding

Key behavior:

- cleanup happens immediately on app load
- only direct files are removed, not nested directories
- no database cleanup is performed here

### `core.py`

Responsibility:

- orchestrates the processing pipeline for one department

It does:

1. parse department results from the PDF
2. enrich each student with department name
3. calculate SGPA and total credits
4. collect dynamic subject headers
5. infer semester using `Subject_Grade`

Return shape:

- `headers`
- `processed_students`
- `semester`

### `config.py`

Responsibility:

- loads environment variables from `Api.env`
- exposes:
  - `MONGO_URI`
  - `DATABASE_NAME`
  - `CREDIT_COLLECTION`
- defines `GRADE_TO_POINT`
- defines `GRADE_STATUS`

Important note:

- this file currently prints the loaded Mongo URI to stdout, which is useful for debugging but not ideal for production hygiene

### `analysis.py`

Responsibility:

- older helper-style analytics

Contains:

- `add_ranking`
- `get_pass_percentage`
- `get_department_average`

These functions operate directly on Mongo collections, but they are not part of the current main page flow.

### `README.md`

Responsibility:

- project overview and setup notes

It broadly describes the intended architecture correctly, though the app has evolved beyond the minimal structure shown there.

### `requiremets.txt`

Responsibility:

- dependency list

Important note:

- the filename is misspelled as `requiremets.txt`


## 5. Page-by-Page Walkthrough

### `pages/1-upload.py`

This is the operational entry point of the real workflow.

Main responsibilities:

- file upload
- department detection
- duplicate upload handling
- result processing
- database persistence
- redirect to result page

Important pieces:

- `confirm_overwrite(...)`
  - Streamlit dialog for duplicate datasets
- session state keys used:
  - `pdf_path`
  - `available_departments`
  - `start_processing`
  - `uploaded_filename`
  - `department_name`
  - `last_upload_id`
  - `DEPT`

Duplicate logic:

- checks `Uploads_Metadata` by:
  - department
  - semester
  - batch
- if overwriting:
  - deletes previous `Uploads_Metadata` record
  - deletes matching `Result` documents by `upload_id`

Mongo writes performed:

- many records into `Result`
- one metadata record into `Uploads_Metadata`

### `pages/2-result.py`

This page turns the processed MongoDB records into an analysis dashboard.

Main responsibilities:

- reconstruct table view from nested subject data
- save CSV output
- compute metrics
- compute subject analysis
- render charts
- show top performers
- export reports

Important computations:

- `Arrear`
  - counted from failed subject grades per student
- result overview
  - total students
  - number of subjects
  - average/highest/lowest SGPA
- subject performance table
  - pass %
  - pass count
  - fail count
  - grade distribution

Export features:

- Excel via `generate_excel_report`
- PDF via `generate_pdf_report`
- HTML via `generate_html_report`

Verification support:

- each export gets a generated `report_id`
- QR code is generated
- report metadata is written to `Report_Metadata`

### `pages/3-chatbot.py`

This is a standalone Gemini-backed assistant page.

Main responsibilities:

- list available Gemini models
- accept a PDF or CSV upload
- let the user ask result-related questions
- preserve chat history in session state

Important behavior:

- it does not use the processed MongoDB result records directly
- it only uses the file uploaded inside this page
- CSV text is limited to the first 30 rows
- all extracted content is truncated to 5000 characters before prompting Gemini

So this page is conceptually adjacent to the project, but technically separate from the main upload/process/result flow.

### `pages/4-report.py`

This is the issue reporting form.

Main responsibilities:

- collect user name, email, issue type, description
- save optional attachments
- write a timestamped text report under `reports/`

Outputs:

- `reports/report_<timestamp>.txt`
- attachments under `reports/attachments/`

This is purely file-based and does not use MongoDB.

### `pages/5-Subject_Configuration.py`

This page is effectively the subject metadata admin screen.

Main responsibilities:

- read all subject-credit definitions from `Subject_Grade`
- normalize DB field names into UI-friendly labels
- filter by search, department, semester
- allow inline editing with `st.data_editor`
- save changes back to MongoDB

This page matters because SGPA computation depends on `Subject_Grade`.

If subject-credit data is wrong or incomplete:

- SGPA becomes wrong or partial
- semester detection may fail

### `pages/6-Advanced_Analytics.py`

This is the historical intelligence layer of the project.

The frontend is kept thin. Most logic is pushed to `utils/advanced_analytics.py`.

Three tabs:

1. Batch Journey
2. Semester Deep Dive
3. Cross Comparisons

What it analyzes:

- semester-wise SGPA progression
- pass percentage evolution
- student heatmaps
- at-risk students
- individual student journeys
- subject difficulty
- lab vs theory comparisons
- batch-vs-batch comparison
- lateral-vs-regular comparison
- cross-department comparison

Unlike the result page, this page uses all historical data from `Result`, not just the last upload.

### `pages/7-Processed_Results.py`

This page is a simple metadata browser.

It reads `Uploads_Metadata` and shows:

- upload order
- department
- semester
- admission year
- batch
- uploaded time
- total students
- source file name

### `pages/8-report_verification.py`

This page validates a report ID.

Main responsibilities:

- accept manual input or query-param input
- call `verify_report`
- show metadata if found

This closes the loop for exported reports by giving them a traceable identity.


## 6. Utility Modules

### `utils/parser.py`

This is the most important low-level extraction module.

Responsibilities:

- extract text from PDF
- detect departments
- isolate one department section
- detect scheme year from register number
- split department text into student blocks
- extract subject-grade pairs
- build structured student objects

Parser assumptions:

- department headers look like `DEPARTMENT NAME[Full Time]`
- each department contains a `Register No Course Code (Grade)` marker
- register numbers match `L?[A-Z]{3}\d{2}[A-Z]{2}\d+`
- subjects look like something like `CST301 (A+)`

Normalization behavior:

- `PASS -> P`
- `ABSENT -> F`
- `WITHHELD -> F`
- `FE -> F`

So the parser intentionally collapses several failure-like states into a single grade symbol.

### `utils/sgpa.py`

This module computes SGPA.

Responsibilities:

- map full department names to abbreviations
- fetch subject credits from `Subject_Grade`
- calculate total weighted grade points
- calculate total credits
- return rounded SGPA

Credit lookup logic:

1. try department-specific subject record
2. if not found, try `department = "ALL"`

Important dependency:

- SGPA accuracy depends entirely on the correctness of `Subject_Grade`

### `utils/db.py`

This is the MongoDB access layer.

Responsibilities:

- create DB connection
- save enriched result records

Important stored fields added during save:

- `department_name`
- `semester`
- `admission_year`
- `batch`
- `upload_id`
- `created_at`

Also contains:

- `read_json`
- `auto_detect_student`
- `initialize_settings`

These appear to be support or leftover utility functions rather than core runtime pieces.

### `utils/batch.py`

This is a small helper intended to infer admission year and batch from a register number.

In the current main flow, parser-derived batch data is more important than this helper, because actual register numbers like `CMA23CS001` do not match the helper’s example format.

### `utils/cgpa.py`

This module is intended for cumulative GPA computation across semesters.

Capabilities included:

- CGPA across all semester records
- CGPA progression
- optional persistence to `Student_Profile`

However, this module is currently not wired into the main UI flow.

### `utils/chatbot.py`

This module powers the chatbot page.

Responsibilities:

- initialize Gemini client
- list available models
- extract text from PDF or CSV
- build a prompt that restricts the model to provided data
- return Gemini output

Guardrails already present:

- CSV limited to first 30 rows
- prompt content limited to 5000 characters
- unsupported files rejected

### `utils/report_auth.py`

This module handles report identity and verification support.

Responsibilities:

- determine local IP
- create QR code pointing to verification URL
- store report metadata
- verify report IDs

Stored collection:

- `Report_Metadata`

Generated artifact:

- QR PNG under `outputs/qr/`

### `utils/report_generator.py`

This is the largest and most presentation-heavy module in the project.

Responsibilities:

- generate PDF reports using ReportLab
- generate Excel reports using OpenPyXL
- generate HTML reports as self-contained markup

Shared design system inside the file:

- common color palette
- grade color mapping
- common summary concepts
- common verification block

All three export formats include the same broad information:

- document header
- department / semester / batch metadata
- result overview
- full student result table
- top performers
- subject performance analysis
- report verification section

This file is essentially the “document rendering engine” of the project.

### `utils/advanced_analytics.py`

This is the data engine behind the advanced analytics page.

Responsibilities are split into:

- base fetch/filter helpers
- batch journey analytics
- semester deep-dive analytics
- cross-comparison analytics

Key functions:

- `get_all_results`
- `get_departments`
- `get_batches_for_department`
- `get_available_semesters`
- `get_semester_summary`
- `get_latest_semester_kpi`
- `get_student_heatmap`
- `get_at_risk_students`
- `get_student_journey`
- `get_subject_difficulty`
- `get_lab_vs_theory`
- `get_batch_comparison`
- `get_lateral_vs_regular`
- `get_cross_dept_comparison`

One nice design decision here:

- this file has no Streamlit dependency, so it is already closer to reusable service-layer code


## 7. MongoDB Collections Used

### `Subject_Grade`

Purpose:

- master subject metadata

Expected fields:

- `subject_code`
- `subject_name`
- `department`
- `semester`
- `scheme_year`
- `credit`

Used by:

- SGPA calculation
- semester inference
- subject configuration page

### `Result`

Purpose:

- processed student-level result records

Typical fields:

- `reg_no`
- `scheme_year`
- `subjects` (list of `{subject_code, grade}`)
- `admission_year`
- `batch`
- `department_name`
- `semester`
- `SGPA`
- `total_credits`
- `upload_id`
- `created_at`

This is the central dataset for the whole system.

### `Uploads_Metadata`

Purpose:

- metadata for each processed upload

Typical fields:

- `upload_id`
- `department`
- `semester`
- `admission_year`
- `batch`
- `uploaded_at`
- `total_students`
- `file_name`

Used for:

- duplicate detection
- processed results overview

### `Report_Metadata`

Purpose:

- report authenticity tracking

Typical fields:

- `report_id`
- `department`
- `file_path`
- `file_type`
- `generated_at`

Used by:

- report verification page

### `Student_Profile`

Purpose:

- optional CGPA persistence

Status:

- referenced in `utils/cgpa.py`
- not part of the current active workflow


## 8. Runtime Folders and Artifacts

### `uploads/`

Stores uploaded PDFs temporarily during processing.

Observed pattern:

- UUID-prefixed PDF names

### `outputs/`

Stores generated analysis artifacts such as:

- CSV result tables
- PDF reports
- Excel reports

### `outputs/qr/`

Stores QR code PNGs generated for report verification.

### `reports/`

Stores issue reports submitted from the report form page.

### `reports/attachments/`

Stores uploaded attachments for issue reports.

### `logs/`

Stores timestamped log files from earlier runs of the project.

The logs show that earlier versions of the parser had richer runtime logging around department scanning and student parsing.


## 9. Actual Data Shape in Practice

From the sample generated CSV in `outputs/`, the flattened result table looks like:

- one row per student
- one column per subject code
- `SGPA`
- `Arrear`

Example pattern:

- `Register No, CST301, CST305, ..., SGPA, Arrear`

This confirms the project uses:

- nested subject lists in MongoDB
- flattened subject columns in exports and visual analysis


## 10. Design Choices I Now Understand Clearly

### Session + persistence hybrid

The user-facing flow talks about temporary data, but the implementation is actually hybrid:

- session state controls the immediate user journey
- MongoDB stores processed results and metadata for later reuse
- filesystem stores reports, CSVs, QR codes, logs, and issue reports

So the app is not purely session-only in practice.

### Parser-first architecture

Everything depends on the PDF parser working against a specific KTU PDF structure.

If the PDF layout changes, these break first:

- department detection
- section isolation
- student block extraction
- subject-grade extraction

### `Subject_Grade` is the academic truth source

Even if parsing succeeds, the app still needs `Subject_Grade` to:

- assign credits
- compute SGPA
- infer semester

This collection is one of the most critical moving parts in the entire project.

### Historical analytics are stronger than the README suggests

The README emphasizes upload + result analysis, but the current codebase already supports:

- cross-batch analysis
- cross-department analysis
- student longitudinal journey
- risk detection
- report verification

So the actual system is more than a simple PDF-to-CSV converter.


## 11. Important Implementation Notes for Future Work

These are not blockers for understanding, but they are worth remembering when we work on this later.

### 1. “Temporary data” is only partially true

- `app.py` clears top-level files in `uploads/` and `outputs/`
- MongoDB collections are not cleared on startup
- `outputs/qr/` is not cleared by the startup cleanup
- reports and logs are persistent

### 2. `utils/report_generator.py` contains legacy-looking unreachable Excel code

There is a large block after an earlier `return output_path` inside the Excel section.

That means the file has both:

- active Excel generation logic
- older dead code left behind

### 3. `utils/cgpa.py` has overlapping definitions

`calculate_cgpa_for_student` is defined twice, and the second definition overrides the first.

So if we later use CGPA features, that file will need cleanup first.

### 4. Batch fallback logic is inconsistent with current register format

`utils.batch.extract_batch_from_reg_no()` expects a different register-number style than the parser currently uses.

The app still works because parser-derived batch data is already present.

### 5. The chatbot is not yet integrated with processed Mongo results

It is an independent file-questioning assistant, not a query layer over the stored result database.

### 6. Dependency tracking likely needs cleanup later

The project uses packages such as:

- `numpy`
- `qrcode`
- `google.genai`

but the current dependency file is minimal and misspelled.


## 12. What I Can Confidently Help With Next

At this point I understand the project across:

- UI flow
- parsing flow
- SGPA flow
- Mongo persistence
- subject metadata dependency
- report generation
- report verification
- advanced historical analytics
- runtime artifacts
- maintenance hotspots

So when you ask for the next change, we can work from a real project model instead of rediscovering the codebase each time.
