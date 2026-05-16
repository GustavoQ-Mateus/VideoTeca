"""Videoteca Unifor — API FastAPI + Supabase."""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.routers import catalog

app = FastAPI(title="Videoteca Unifor API", version="0.1.0")

_origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()] or ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


app.include_router(catalog.router, prefix="/api/v1/catalog", tags=["catalog"])
