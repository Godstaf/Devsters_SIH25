-- Database initialization script
-- This script runs when the database container is first created

-- Create the main database if it doesn't exist
-- (This is handled by POSTGRES_DB environment variable)

-- Create any additional schemas or extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a sample table for testing
CREATE TABLE IF NOT EXISTS "user" (
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) PRIMARY KEY,
    password VARCHAR(1000) NOT NULL
);

-- Create a sample table for items (matching your existing schema)
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


