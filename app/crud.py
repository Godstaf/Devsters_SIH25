import os
import psycopg2 as ps
from dotenv import load_dotenv

# Load environment variables from a .env file if present
load_dotenv()

# Read database configuration from environment variables
db_host = os.getenv("DB_HOST", "localhost")
db_port = os.getenv("DB_PORT", "5432")
db_user = os.getenv("DB_USER", "postgres")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

mycon = None
cr = None

def _try_connect():
    global mycon, cr
    if mycon is not None:
        return
    if not db_password or not db_name:
        print(
            "Database not configured: set DB_PASSWORD and DB_NAME or provide DATABASE_URL. Skipping connection."
        )
        return
    try:
        mycon = ps.connect(
            host=db_host,
            user=db_user,
            password=db_password,
            dbname=db_name,
            port=db_port,
        )
        cr = mycon.cursor()
        print("Connected")
    except ps.Error as e:
        print(f"Database connection failed: {e}")

# Optionally trigger a best-effort connection on import (no crash on failure)
_try_connect()