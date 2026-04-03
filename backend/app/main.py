import os
from dotenv import load_dotenv

# ✅ Load env FIRST
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
env_path = os.path.join(BASE_DIR, "Api.env")
load_dotenv(env_path)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.auth import router as auth_router
from app.dependencies.auth_deps import verify_token,Depends

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth")


@app.get("/protected")
def protected_route(user=Depends(verify_token)):
    return {
        "message": "You are authenticated",
        "user": user
    }