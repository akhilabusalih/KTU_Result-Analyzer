from fastapi import APIRouter, Request
from fastapi.responses import RedirectResponse
import urllib.parse

from app.core.config import GOOGLE_CLIENT_ID, REDIRECT_URI
from app.services.auth_service import handle_google_callback

router = APIRouter()

# 🔵 Login
@router.get("/google/login")
def google_login():
    params = {
        "client_id": GOOGLE_CLIENT_ID,
        "redirect_uri": REDIRECT_URI,
        "response_type": "code",
        "scope": "openid email profile",
        "access_type": "offline",
        "prompt": "select_account"
    }

    url = "https://accounts.google.com/o/oauth2/v2/auth?" + urllib.parse.urlencode(params)
    return RedirectResponse(url)


# 🟢 Callback (THIS MUST EXIST ✅)
@router.get("/google/callback")
async def google_callback(request: Request):
    code = request.query_params.get("code")
    return await handle_google_callback(code)