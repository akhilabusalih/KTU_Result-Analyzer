from typing import Optional
from fastapi import Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

from app.core.security import decode_token

# 🔹 IMPORTANT: auto_error=False → makes token optional
optional_security = HTTPBearer(auto_error=False)


def verify_token_optional(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(optional_security)
) -> Optional[dict]:
    """
    Optional authentication:
    - If token is present → decode and return user
    - If not present → return None
    - If invalid → also return None (silent fail)
    """

    if credentials is None:
        return None

    try:
        return decode_token(credentials.credentials)
    except Exception:
        return None