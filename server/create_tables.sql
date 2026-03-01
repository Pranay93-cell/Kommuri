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
    description TEXT,
    service_id INT,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL
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
-- sample services entries
INSERT INTO services (title, description, price) VALUES
  ('Wedding Cards', 'Premium custom wedding invitation printing.', 0.00),
  ('Visiting Cards', 'High-quality business visiting cards.', 0.00),
  ('Banners', 'Flex & Vinyl banners for all occasions.', 0.00),
  ('Digital Printing', 'All types of digital printing services.', 0.00);

-- dummy gallery items for each service (you can replace the URLs below with your own images in `public/images`)
INSERT INTO gallery (title, image_url, description, service_id) VALUES
  ('Wedding Card 1', 'src/images/img1.png', 'Card 1', 1),);
