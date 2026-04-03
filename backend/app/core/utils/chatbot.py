import os
from google import genai
from PyPDF2 import PdfReader
import pandas as pd

#-------------------------------------------------------------------
#testing and available models
#-------------------------------------------------------------------

def get_available_models():
    try:
        client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

        models = client.models.list()

        # Extract model names
        model_names = [m.name for m in models]

        return model_names

    except Exception as e:
        return None

# ---------------------------------------
# INIT GEMINI CLIENT
# ---------------------------------------

def get_client():
    api_key = os.getenv("GEMINI_API_KEY")

    if not api_key:
        raise ValueError("GEMINI_API_KEY not set")

    return genai.Client(api_key=api_key)


# ---------------------------------------
# EXTRACT TEXT FROM PDF
# ---------------------------------------

def extract_text_from_pdf(file):

    reader = PdfReader(file)
    text = ""

    for page in reader.pages:
        text += page.extract_text() + "\n"

    return text


# ---------------------------------------
# EXTRACT TEXT FROM CSV
# ---------------------------------------

def extract_text_from_csv(file):

    df = pd.read_csv(file)

    # Limit rows (IMPORTANT)
    df = df.head(30)

    # Convert to readable text
    text = "\n".join(
        df.astype(str).apply(
            lambda row: " | ".join(f"{col}: {row[col]}" for col in df.columns),
            axis=1
        )
    )

    return text


# ---------------------------------------
# MAIN CHATBOT FUNCTION
# ---------------------------------------

def chatbot_response(question, file, file_type, model_name):

    client = get_client()

    # -------------------------------
    # EXTRACT CONTENT
    # -------------------------------
    if file_type == "pdf":
        content = extract_text_from_pdf(file)

    elif file_type == "csv":
        content = extract_text_from_csv(file)

    else:
        return "Unsupported file type"

    # Limit content size (IMPORTANT)
    content = content[:5000]

    # -------------------------------
    # PROMPT
    # -------------------------------
    prompt = f"""
You are a college result assistant.

Below is data extracted from a file:

{content}

Answer the user's question based ONLY on this data.

Question:
{question}
"""

    # -------------------------------
    # GEMINI CALL
    # -------------------------------
    try:
        response = client.models.generate_content(
            model=model_name,
            contents=prompt
        )

        return response.text

    except Exception as e:
        return f"Error: {str(e)}"