import streamlit as st
from utils.chatbot import chatbot_response, get_available_models

st.set_page_config(page_title="AI Chatbot", layout="wide")

# --------------------------------------------------
# GLOBAL CSS (ALIGN + COMPACT)
# --------------------------------------------------

st.markdown("""
<style>

/* Center content */
.main > div {
    max-width: 900px;
    margin: auto;
}

/* Reduce top spacing */
.block-container {
    padding-top: 2rem;
    padding-bottom: 1rem;
}

/* Chat bubbles */
.user-msg {
    background: #2b4c7e;
    padding: 10px 14px;
    border-radius: 12px;
    color: white;
    max-width: 70%;
    margin: 6px 0;
}

.bot-msg {
    background: #1e1e1e;
    padding: 10px 14px;
    border-radius: 12px;
    color: white;
    max-width: 70%;
    margin: 6px 0;
}

/* Buttons (chips style) */
div.stButton > button {
    border-radius: 20px;
    padding: 6px 14px;
    font-size: 14px;
}

/* Input styling */
input {
    background-color: #1e1e1e !important;
    color: white !important;
    border-radius: 12px !important;
    padding: 10px !important;
}

</style>
""", unsafe_allow_html=True)

# --------------------------------------------------
# HEADER
# --------------------------------------------------

st.markdown("<h2 style='margin-bottom:0;'>🎓 Result Analyzer Chatbot</h2>", unsafe_allow_html=True)
st.markdown("<p style='margin-top:0; color:gray;'>Ask anything about student performance</p>", unsafe_allow_html=True)

# --------------------------------------------------
# STATE
# --------------------------------------------------

if "chat_history" not in st.session_state:
    st.session_state.chat_history = []

# --------------------------------------------------
# SIDEBAR
# --------------------------------------------------

with st.sidebar:

    st.markdown("## 🤖 Gemini Settings")

    models = get_available_models()

    if models:
        st.success("🟢 Connected")
        selected_model = st.selectbox("Select Model", models)
    else:
        st.error("🔴 Not Connected")
        selected_model = None

    st.markdown("---")

    st.markdown("## 📂 Upload File")

    uploaded_file = st.file_uploader("Upload PDF or CSV", type=["pdf", "csv"])

    file_type = None
    if uploaded_file:
        file_type = uploaded_file.name.split(".")[-1].lower()

# --------------------------------------------------
# HELPER
# --------------------------------------------------

def run_query(query):
    if not uploaded_file:
        st.warning("Upload file first")
        return

    if not selected_model:
        st.warning("Gemini not connected")
        return

    with st.spinner("🤖 Thinking..."):
        reply = chatbot_response(query, uploaded_file, file_type, selected_model)

    st.session_state.chat_history.append(("user", query))
    st.session_state.chat_history.append(("bot", reply))

    st.rerun()

# --------------------------------------------------
# EMPTY STATE (CENTERED)
# --------------------------------------------------

if len(st.session_state.chat_history) == 0:

    st.markdown("<h4 style='margin-bottom:10px;'>💡 Try asking</h4>", unsafe_allow_html=True)

    col1, col2, col3 = st.columns(3)

    with col1:
        if st.button("🏆 Top 5 Students"):
            run_query("top 5 students")

    with col2:
        if st.button("❌ Failed Students"):
            run_query("failed students")

    with col3:
        if st.button("⚠️ At Risk Students"):
            run_query("at risk students")

    col4, col5 = st.columns(2)

    with col4:
        if st.button("📊 Department Performance"):
            run_query("department performance")

    with col5:
        if st.button("📈 Overall Analysis"):
            run_query("overall result analysis")

# --------------------------------------------------
# CHAT DISPLAY
# --------------------------------------------------

if len(st.session_state.chat_history) > 0:

    st.markdown("## 💬 Chat")

    for role, msg in st.session_state.chat_history:

        if role == "user":
            st.markdown(
                f"""
                <div style='display:flex; justify-content:flex-end'>
                    <div class="user-msg">🧑 {msg}</div>
                </div>
                """,
                unsafe_allow_html=True
            )
        else:
            st.markdown(
                f"""
                <div style='display:flex; justify-content:flex-start'>
                    <div class="bot-msg">🤖 {msg}</div>
                </div>
                """,
                unsafe_allow_html=True
            )

# --------------------------------------------------
# INPUT (NO EXTRA SPACE)
# --------------------------------------------------

col1, col2 = st.columns([8,1])

with col1:
    user_input = st.text_input("Ask something...", label_visibility="collapsed")

with col2:
    ask = st.button("➤")

# --------------------------------------------------
# HANDLE INPUT
# --------------------------------------------------

if ask and user_input.strip():
    run_query(user_input)