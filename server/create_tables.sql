-- SQL script to create tables for kommuri_db

-- Create services table
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2)
);

-- Create gallery table
CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    description TEXT
);

-- Create contact table
CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);

-- Create contact_info table (assuming fields for contact information)
CREATE TABLE contact_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phone VARCHAR(20),
    address TEXT,
    email VARCHAR(255),
    website VARCHAR(255)
);
insert into services
 values(1,'web developer',15000); 

-- Note: No table needed for home as it's just a static message in the API