# FastAPI Project

This is a basic FastAPI project structure that includes essential components for building a web application. 

## Project Structure

```
fastapi-project
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── crud.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── routers
│       ├── __init__.py
│       └── items.py
├── static
│   └── css
│       └── style.css
├── templates
│   └── index.html
├── .env
├── README.md
├── requirements.txt
└── SECURITY.md
```

## Installation

To get started with this project, clone the repository and install the required dependencies:

```bash
pip install -r requirements.txt
```

## Usage

To run the application, execute the following command:

```bash
uvicorn app.main:app --reload
```

Visit `http://127.0.0.1:8000` in your browser to access the application.

## Features

- CRUD operations for items
- Database connection management
- Pydantic models for data validation
- Static files serving (CSS)
- HTML templating

## Environment Variables

Make sure to configure your environment variables in the `.env` file for database connections and other settings. See `.env.example` for the required keys.

### Local Postgres via Docker (isolated from system Postgres)

1. Create a `.env` in the project root with either a `DATABASE_URL` or the individual variables:

```
# Single URL (preferred)
DATABASE_URL=postgresql+psycopg2://postgres:postgres@localhost:5433/sih25

# Or individual variables
DB_HOST=localhost
DB_PORT=5433
DB_NAME=sih25
DB_USER=postgres
DB_PASSWORD=postgres
```

2. Start Postgres with Docker (requires Docker Desktop on Windows):

```
docker run --name sih25-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=sih25 -p 5433:5432 -v %cd%/postgres-data:/var/lib/postgresql/data -d postgres:16-alpine
```

3. Run the app:

```
uvicorn app.main:app --reload
```

Notes: Using port 5433 avoids conflicts with any global Postgres on your PC. Data persists in `postgres-data/` which is ignored by Git.

## Security

Refer to the `SECURITY.md` file for best practices and security considerations for this project.