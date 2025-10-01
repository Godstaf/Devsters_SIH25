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
CREATE TABLE IF NOT EXISTS "student_details" (
    name VARCHAR(200) NOT NULL,
    student_id VARCHAR(200) PRIMARY KEY,
    email VARCHAR(200) NOT NULL,
    institution_id VARCHAR(200) NOT NULL,
    branch VARCHAR(200) NOT NULL,
    passing_year VARCHAR(200) NOT NULL,
    semester VARCHAR(200) NOT NULL,
    status VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    status VARCHAR(200) NOT NULL
);




-- Creating table for storing faculty details
CREATE TABLE IF NOT EXISTS "faculty_details" (
    name VARCHAR(200) NOT NULL,
    faculty_id VARCHAR(200) PRIMARY KEY,
    email VARCHAR(200) NOT NULL,
    institution_id VARCHAR(200) NOT NULL,
    designation_id VARCHAR(200) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    status VARCHAR(200) NOT NULL
);



-- Creating table for storing institution details
CREATE TABLE IF NOT EXISTS "institution_details" (
    name VARCHAR(200) NOT NULL,
    institution_id VARCHAR(200) PRIMARY KEY,
    institution_name VARCHAR(200) NOT NULL,
    institution_address VARCHAR(200) NOT NULL,
    institution_city VARCHAR(200) NOT NULL,
    institution_state VARCHAR(200) NOT NULL,
    institution_zip VARCHAR(200) NOT NULL,
    institution_country VARCHAR(200) NOT NULL,
    institution_phone VARCHAR(200) NOT NULL,
    institution_email VARCHAR(200) NOT NULL,
    institution_website VARCHAR(200) NOT NULL,
    institution_logo VARCHAR(200) NOT NULL,
    institution_description VARCHAR(200) NOT NULL,
    institution_type VARCHAR(200) NOT NULL,
    institution_status VARCHAR(200) NOT NULL,
    institution_created_at TIMESTAMP NOT NULL,
    institution_updated_at TIMESTAMP NOT NULL,
    institution_status VARCHAR(200) NOT NULL
);




-- Creating table for storing courses' details
CREATE TABLE IF NOT EXISTS "course_details" (
    course_id VARCHAR(200) PRIMARY KEY,
    course_name VARCHAR(200) NOT NULL,
    course_description VARCHAR(200) NOT NULL,
    course_type VARCHAR(200) NOT NULL,
    course_duration VARCHAR(200) NOT NULL,
    course_credits VARCHAR(200) NOT NULL,
    course_prerequisites VARCHAR(200) NOT NULL,
    course_outcomes VARCHAR(200) NOT NULL,
    course_evaluation VARCHAR(200) NOT NULL,
    course_status VARCHAR(200) NOT NULL,
    course_created_at TIMESTAMP NOT NULL,
    course_updated_at TIMESTAMP NOT NULL,
    course_status VARCHAR(200) NOT NULL
);




-- Creating table for storing designation details
CREATE TABLE IF NOT EXISTS "designation_details" (
    designation_id VARCHAR(200) PRIMARY KEY,
    designation_name VARCHAR(200) NOT NULL,
    designation_description VARCHAR(200) NOT NULL,
    designation_strength VARCHAR(200) NOT NULL,
    designation_status VARCHAR(200) NOT NULL,
    designation_created_at TIMESTAMP NOT NULL,
    designation_updated_at TIMESTAMP NOT NULL,
    designation_status VARCHAR(200) NOT NULL
);




