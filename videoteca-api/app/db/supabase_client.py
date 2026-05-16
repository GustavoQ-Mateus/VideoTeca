import httpx

from app.core.config import settings


def get_supabase_headers() -> dict[str, str]:
    key = settings.supabase_service_role_key
    return {
        "apikey": key,
        "Authorization": f"Bearer {key}",
        "Content-Type": "application/json",
        "Prefer": "return=representation",
    }


async def supabase_get_json(path: str, params: dict | None = None) -> list | dict:
    """GET {SUPABASE_URL}/rest/v1/{path}"""
    if not settings.supabase_url or not settings.supabase_service_role_key:
        raise RuntimeError("Supabase não configurado")
    url = f"{settings.supabase_url.rstrip('/')}/rest/v1/{path.lstrip('/')}"
    async with httpx.AsyncClient(timeout=30.0) as client:
        r = await client.get(url, headers=get_supabase_headers(), params=params or {})
        r.raise_for_status()
        return r.json()
