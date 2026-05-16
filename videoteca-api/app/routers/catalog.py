from fastapi import APIRouter, HTTPException

from app.core.config import settings
from app.db import supabase_client

router = APIRouter()


MOCK_FILMS = [
    {
        "id": 1,
        "title": "Cidade de Deus",
        "year": 2002,
        "director": "Fernando Meirelles",
        "genre": "Drama",
        "duration": "130 min",
        "language": "Português",
        "rating": "16+",
        "media": "DVD",
        "cover": "/covers/cidade-de-deus.jpg",
        "status": "available",
        "location": "Estante A-12",
    },
]


@router.get("/films")
async def list_films():
    """Lista catálogo. Usa Supabase (tabela films) se configurado; senão retorna mock."""
    if settings.supabase_url and settings.supabase_service_role_key:
        try:
            rows = await supabase_client.supabase_get_json(
                "films",
                params={"select": "*", "order": "title.asc"},
            )
            if isinstance(rows, list):
                return rows
        except Exception:
            pass
    return MOCK_FILMS


@router.get("/films/{film_id}")
async def get_film(film_id: int):
    if settings.supabase_url and settings.supabase_service_role_key:
        try:
            rows = await supabase_client.supabase_get_json(
                "films",
                params={"select": "*", "id": f"eq.{film_id}"},
            )
            if isinstance(rows, list) and rows:
                return rows[0]
        except Exception:
            pass
    for f in MOCK_FILMS:
        if f["id"] == film_id:
            return f
    raise HTTPException(status_code=404, detail="Filme não encontrado")
