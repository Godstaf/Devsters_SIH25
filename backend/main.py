from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from backend.routers import items

app = FastAPI()

# Legacy static assets (if any)
app.mount("/static", StaticFiles(directory="static"), name="static")

# API routes are namespaced to avoid clashing with SPA routes
app.include_router(items.router, prefix="/api")

# Frontend (React) build output directory
FRONTEND_DIR = "frontend"

# Mount the built frontend at root; html=True serves index.html for unknown paths (SPA)
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
