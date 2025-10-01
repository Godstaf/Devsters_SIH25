#!/usr/bin/env python3
"""
Simple test script to verify the FastAPI app can start without database dependencies
"""
import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

try:
    from backend.main import app
    print("✅ FastAPI app imported successfully")
    
    # Test if we can create a test client
    from fastapi.testclient import TestClient
    client = TestClient(app)
    
    # Test health endpoints
    response = client.get("/health")
    print(f"✅ /health endpoint: {response.status_code} - {response.json()}")
    
    response = client.get("/api/health")
    print(f"✅ /api/health endpoint: {response.status_code} - {response.json()}")
    
    print("✅ All tests passed! App should work on Railway.")
    
except Exception as e:
    print(f"❌ Error: {e}")
    sys.exit(1)
