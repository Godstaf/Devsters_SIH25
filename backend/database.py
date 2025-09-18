import os
import psycopg2 as ps


def get_connection() -> ps.extensions.connection:
    # Prefer environment variables; fall back to Docker Compose defaults for local runs
    db_host = os.getenv("DB_HOST", "localhost")  # inside container use 'db'; local uses 'localhost'
    db_port = os.getenv("DB_PORT", "5432")
    db_user = os.getenv("DB_USER", "devsters_user")
    db_password = os.getenv("DB_PASSWORD", "sih2025devsters")
    db_name = os.getenv("DB_NAME", "devsters_db")

    return ps.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        dbname=db_name,
        port=db_port,
    )