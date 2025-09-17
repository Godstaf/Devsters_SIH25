-- Database initialization script
-- This script runs when the database container is first created

-- Create the main database if it doesn't exist
-- (This is handled by POSTGRES_DB environment variable)

-- Create any additional schemas or extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create a sample table for testing
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

-- Insert some sample data
INSERT INTO users (username, email) VALUES 
    ('admin', 'admin@devsters.com'),
    ('testuser', 'test@devsters.com')
ON CONFLICT (username) DO NOTHING;

INSERT INTO items (name, description, price) VALUES 
    ('Sample Item 1', 'This is a sample item for testing', 29.99),
    ('Sample Item 2', 'Another sample item', 49.99)
ON CONFLICT DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_items_name ON items(name);
