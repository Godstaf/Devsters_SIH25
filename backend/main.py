from fastapi import FastAPI, Form
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path
from backend.routers import items
from backend.database import get_connection
import hashlib

app = FastAPI()

# Legacy static assets (if any)
app.mount("/static", StaticFiles(directory="static"), name="static")

# API routes are namespaced to avoid clashing with SPA routes
app.include_router(items.router, prefix="/api")

# Health check endpoint for deployment platforms
@app.get("/api/health")
async def health_check():
    try:
        # Simple health check without database dependency
        return {"status": "ok", "message": "API is running", "timestamp": "2025-01-01T00:00:00Z"}
    except Exception as e:
        return {"status": "error", "message": str(e)}


# Root health check endpoint (alternative)
@app.get("/health")
async def root_health_check():
    return {"status": "ok", "message": "API is running"}

# Frontend (React) build output directory
FRONTEND_DIR = Path("frontend").resolve()
INDEX_HTML = FRONTEND_DIR / "index.html"




# Login API 
@app.post("/loginit")
async def loginit(email: str = Form(...), password: str = Form(...)):
    if not password:
        return JSONResponse({"status": "error", "message": "Password cannot be empty"}, status_code=401)

    try:
        hashed_password = hashlib.sha256(password.encode()).hexdigest()

        # Table renamed to users (avoid reserved keyword "user")
        query = 'SELECT name FROM login_credentials WHERE email = %s AND password = %s'
        values = (email, hashed_password)

        with get_connection() as conn:
            with conn.cursor() as cr:
                cr.execute(query, values)
                result = cr.fetchone()

        if result is None:
            return JSONResponse({"status": "error", "message": "Invalid email or password"}, status_code=401)

        usrName = result[0] if result else None
        first_name = (str(usrName).split()[0] if usrName else "")

        resp = JSONResponse({"status": "success", "message": "Login successful!"}, status_code=200)
        # Optional: mimic session via cookies
        resp.set_cookie("userEmail", email, httponly=True)
        resp.set_cookie("userName", first_name, httponly=True)
        return resp
    except Exception as e:
        return JSONResponse({"status": "error", "message": f"Database connection failed: {str(e)}"}, status_code=500)


async def get_user_details(email: str):
    pass



# Serve SPA assets and files: return file if it exists, else fallback to index.html
# IMPORTANT: This catch-all must be defined AFTER all API routes so it doesn't intercept them
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