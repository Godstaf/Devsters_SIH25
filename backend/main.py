from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from backend.routers import items

app = FastAPI()

# Legacy static assets (if any)
app.mount("/static", StaticFiles(directory="static"), name="static")

# API routes are namespaced to avoid clashing with SPA routes
app.include_router(items.router, prefix="/api")

# Frontend (React) build output directory
FRONTEND_DIR = Path("frontend").resolve()
INDEX_HTML = FRONTEND_DIR / "index.html"

# Serve SPA assets and files: return file if it exists, else fallback to index.html
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    # Block API path from being handled here
    if full_path.startswith("api/"):
        return FileResponse(INDEX_HTML)  # Should not happen due to router, but safe fallback

    candidate = (FRONTEND_DIR / full_path).resolve()
    # Prevent path traversal outside FRONTEND_DIR
    if FRONTEND_DIR in candidate.parents and candidate.is_file():
        return FileResponse(candidate)
    return FileResponse(INDEX_HTML)

