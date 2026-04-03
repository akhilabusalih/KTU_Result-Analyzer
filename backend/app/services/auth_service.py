import httpx
from datetime import datetime
from app.dependencies.database import get_database
from app.core.config import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, REDIRECT_URI
from app.core.security import create_token

async def handle_google_callback(code: str):
    # 🔁 Token exchange
    token_url = "https://oauth2.googleapis.com/token"

    token_data = {
        "code": code,
        "client_id": GOOGLE_CLIENT_ID,
        "client_secret": GOOGLE_CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
    }

    async with httpx.AsyncClient() as client:
        token_json = (await client.post(token_url, data=token_data)).json()

    access_token = token_json.get("access_token")
    if not access_token:
        return {"error": "Token exchange failed", "details": token_json}

    # 🔁 Get user
    async with httpx.AsyncClient() as client:
        user_info = (await client.get(
            "https://www.googleapis.com/oauth2/v2/userinfo",
            headers={"Authorization": f"Bearer {access_token}"}
        )).json()

    # 🗄️ Save user
    db = get_database()
    users = db["users"]

    if not users.find_one({"email": user_info["email"]}):
        users.insert_one({
            "email": user_info["email"],
            "name": user_info.get("name"),
            "picture": user_info.get("picture"),
            "created_at": datetime.utcnow()
        })

    # 🔐 JWT
    token = create_token({"email": user_info["email"]})

    return {
        "message": "Login successful",
        "token": token,
        "user": user_info
    }