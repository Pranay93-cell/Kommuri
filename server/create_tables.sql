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

-- dummy gallery items for each service
INSERT INTO gallery (title, image_url, description, service_id) VALUES
  ('Wedding Sample 1', 'https://via.placeholder.com/300x200?text=Wedding+1', 'Example wedding card', 1),
  ('Wedding Sample 2', 'https://via.placeholder.com/300x200?text=Wedding+2', 'Another invitation', 1),
  ('Visiting Sample 1', 'https://via.placeholder.com/300x200?text=Visiting+1', 'Business card design', 2),
  ('Visiting Sample 2', 'https://via.placeholder.com/300x200?text=Visiting+2', 'Professional visit card', 2),
  ('Banner Sample 1', 'https://via.placeholder.com/300x200?text=Banner+1', 'Outdoor banner', 3),
  ('Banner Sample 2', 'https://via.placeholder.com/300x200?text=Banner+2', 'Indoor flex banner', 3),
  ('Digital Print 1', 'https://via.placeholder.com/300x200?text=Digital+1', 'Digital printing example', 4),
  ('Digital Print 2', 'https://via.placeholder.com/300x200?text=Digital+2', 'Flyer print sample', 4);

-- Note: No table needed for home as it's just a static message in the API