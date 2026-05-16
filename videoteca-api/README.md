# Videoteca API (FastAPI)

Variáveis de ambiente (`.env`):

- `SUPABASE_URL` — URL do projeto Supabase
- `SUPABASE_SERVICE_ROLE_KEY` — chave service role (somente servidor)
- `CORS_ORIGINS` — opcional, padrão `http://localhost:3000`

## Executar

```bash
cd videoteca-api
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

- Health: `GET http://localhost:8000/health`
- Catálogo: `GET http://localhost:8000/api/v1/catalog/films`

Sem Supabase configurado, os endpoints de catálogo retornam dados mock para desenvolvimento.
