-- Database initialization script
-- This script runs when the database container is first created

-- Create the main database if it doesn't exist
-- (This is handled by POSTGRES_DB environment variable)

-- Create any additional schemas or extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Creating a table for storing hashed login credentials
CREATE TABLE IF NOT EXISTS "login_credentials" (
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) PRIMARY KEY,
    password VARCHAR(1000) NOT NULL
);  

-- Creating table for storing student details




-- Creating table for storing faculty details




-- Creating table for storing institution details




-- Creating table for storing courses' details




-- Creating table for storing designation details




