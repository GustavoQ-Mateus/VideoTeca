"""Videoteca Unifor — API FastAPI + PostgreSQL."""
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.db import postgres
from app.routers import catalog


@asynccontextmanager
async def lifespan(app: FastAPI):
    await postgres.init_pool()
    yield
    await postgres.close_pool()


app = FastAPI(title="Videoteca Unifor API", version="0.1.0", lifespan=lifespan)

_origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()] or ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health():
    pool = postgres.get_pool()
    await pool.fetchval("SELECT 1")
    return {"status": "ok"}


app.include_router(catalog.router, prefix="/api/v1/catalog", tags=["catalog"])
