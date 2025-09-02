import psycopg2 as ps

# Connect to postesql database
pwrd = "krish113838G"

try:
    mycon = ps.connect(
        host='localhost',
        user='postgres',
        password=pwrd,
        dbname = 'aiversus'
    )
    print("Connected")


except ps.Error as e:
    print(f"Database connection failed: {e}")
    exit(1)

cr = mycon.cursor()