#!/bin/bash
echo "Starting FastAPI application..."
echo "Port: $PORT"
echo "Host: 0.0.0.0"

# Start the application
python -m uvicorn backend.main:app --host 0.0.0.0 --port $PORT
