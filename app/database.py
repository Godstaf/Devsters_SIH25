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

if not db_password or not db_name:
    raise RuntimeError(
        "Missing required database environment variables. Set DB_PASSWORD and DB_NAME (or use DATABASE_URL elsewhere)."
    )

try:
    mycon = ps.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        dbname=db_name,
        port=db_port,
    )
    print("Connected")
except ps.Error as e:
    print(f"Database connection failed: {e}")
    exit(1)

cr = mycon.cursor()