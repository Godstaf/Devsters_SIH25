# Devsters SIH25 Project

A full-stack application with FastAPI backend and React frontend, designed for Smart India Hackathon 2025.

## Project Structure

```
devsters-sih25/
├── backend/
│   ├── __init__.py
│   ├── main.py
│   ├── crud.py
│   ├── database.py
│   ├── schemas.py
│   └── routers/
│       ├── __init__.py
│       └── items.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   └── store/
│   ├── package.json
│   └── vite.config.js
├── static/
│   └── css/
├── docker-compose.yml
├── Dockerfile
├── init-db.sql
├── requirements.txt
├── SECURITY.md
└── README.md
```

## Quick Start with Docker (Recommended)

The easiest way to get started is using Docker Compose, which sets up everything including the database:

### Prerequisites
- Docker Desktop installed
- Git

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd devsters-sih25
   ```

2. **Start all services:**
   ```bash
   docker compose up --build
   ```

3. **Access the application:**
   - Frontend (served by backend): http://localhost:8000
   - Backend API: http://localhost:8000/api
   - API Docs (Swagger): http://localhost:8000/docs
   - Database (host port): localhost:5433

### What Docker Compose Sets Up

- **PostgreSQL Database**: Persistent database (host port 5433 → container 5432)
- **Backend API**: FastAPI application with auto-reload and SPA static serving
- **Frontend**: React application built with Vite; build artifacts are served by the backend
- **Data Persistence**: Database data persists between restarts

## Database Configuration

The database is automatically configured with (see `docker-compose.yml`):
- **Database Name**: `devsters_db`
- **Username**: `devsters_user`
- **Password**: `sih2025devsters`
- **Container Port**: `5432` (exposed on host as `5433`)

### Database Features

- **Persistent Storage**: Data survives container restarts
- **Health Checks**: Backend waits for database to be ready
- **Sample Data**: Pre-populated with test users and items
- **Initialization Script**: `init-db.sql` runs on first startup

## Development

### Backend Development
The backend runs with auto-reload when files change. API documentation is available at:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

### Frontend Development
The frontend uses Vite for fast development with hot module replacement.

### Database Management

**Connect to the database:**
```bash
# Using Docker
docker exec -it devsters-db psql -U devsters_user -d devsters_db

# Or using any PostgreSQL client
# Host: localhost
# Port: 5433
# Database: devsters_db
# Username: devsters_user
# Password: sih2025devsters
```

**Reset the database:**
```bash
# Stop services
docker compose down

# Remove database volume (WARNING: This deletes all data)
# Volume is named `postgres_data` (Docker may prefix it with the project name)
# Check with: docker volume ls | find "postgres_data"
docker volume rm devsters_sih25_postgres_data

# Start services again
docker compose up --build
```

## Environment Variables

Environment variables are managed by Docker Compose. Update the `environment` section in `docker-compose.yml` to change values such as `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`.

For local development without Docker, export these variables in your shell before running the backend.

## Manual Setup (Without Docker)

If you prefer to run without Docker:

1. **Install PostgreSQL** locally
2. **Create database** and user matching the values above (`devsters_db` / `devsters_user` / password `sih2025devsters`)
3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Install Node.js dependencies:**
   ```bash
   cd frontend
   npm install
   ```
5. **Run backend:**
   ```bash
   uvicorn backend.main:app --reload
   ```
6. **Run frontend (development):**
   ```bash
   cd frontend
   npm run dev
   ```
   The production SPA build is generated with `npm run build` and, in Docker, is served by the backend from the `frontend/dist` directory.

### Notes on Routing and Static Files

- All API routes are namespaced under `/api` (see `backend/routers`).
- The backend serves the built SPA and falls back to `index.html` for unknown routes, enabling client-side routing.
- A login endpoint exists at `POST /loginit` expecting form fields `email` and `password`.

## Features

- **Full-stack application** with FastAPI and React
- **Persistent PostgreSQL database** with Docker
- **CRUD operations** (see `backend/routers`)
- **Modern UI** with Tailwind CSS and DaisyUI
- **Development-friendly** with hot reload
- **Production-ready** with Docker containers

## Security

Refer to the `SECURITY.md` file for best practices and security considerations for this project.