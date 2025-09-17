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
├── env.example
├── requirements.txt
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
   docker-compose up --build
   ```

3. **Access the application:**
   - Frontend: http://localhost:8000
   - Backend API: http://localhost:8000/api
   - Database: localhost:5432

### What Docker Compose Sets Up

- **PostgreSQL Database**: Persistent database with sample data
- **Backend API**: FastAPI application with auto-reload
- **Frontend**: React application with Vite build system
- **Data Persistence**: Database data persists between restarts

## Database Configuration

The database is automatically configured with:
- **Database Name**: `devsters_db`
- **Username**: `devsters_user`
- **Password**: `devsters_password`
- **Port**: `5432`

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
# Port: 5432
# Database: devsters_db
# Username: devsters_user
# Password: devsters_password
```

**Reset the database:**
```bash
# Stop services
docker-compose down

# Remove database volume (WARNING: This deletes all data)
docker volume rm devsters_sih25_postgres_data

# Start services again
docker-compose up --build
```

## Environment Variables

Copy `env.example` to `.env` and modify as needed:

```bash
cp env.example .env
```

## Manual Setup (Without Docker)

If you prefer to run without Docker:

1. **Install PostgreSQL** locally
2. **Create database** and user as specified in `env.example`
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
6. **Run frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

## Features

- **Full-stack application** with FastAPI and React
- **Persistent PostgreSQL database** with Docker
- **CRUD operations** for items and users
- **Modern UI** with Tailwind CSS
- **Development-friendly** with hot reload
- **Production-ready** with Docker containers

## Security

Refer to the `SECURITY.md` file for best practices and security considerations for this project.