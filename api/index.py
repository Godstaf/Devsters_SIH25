from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
from backend.routers import items
from backend.database import get_connection
import hashlib
import os

app = FastAPI()

# Include API routes
app.include_router(items.router, prefix="/api")

# Login API 
@app.post("/loginit")
async def loginit(email: str = Form(...), password: str = Form(...)):
    if not password:
        return JSONResponse({"status": "error", "message": "Password cannot be empty"}, status_code=401)

    hashed_password = hashlib.sha256(password.encode()).hexdigest()

    # Table renamed to users (avoid reserved keyword "user")
    query = 'SELECT name FROM users WHERE email = %s AND password = %s'
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

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "API is running"}

# Export the app for Vercel
handler = app
