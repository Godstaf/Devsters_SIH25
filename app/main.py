from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from app.routers import items

app = FastAPI()

# Templates remain for any server-rendered pages if needed
templates = Jinja2Templates(directory="templates")

# Legacy static assets (if any)
app.mount("/static", StaticFiles(directory="static"), name="static")

# API routes are namespaced to avoid clashing with SPA routes
app.include_router(items.router, prefix="/api")

# Frontend (React) build output directory
FRONTEND_DIR = "frontend"

# Mount the built frontend at root; html=True serves index.html for unknown paths (SPA)
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")