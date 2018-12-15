DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE merch (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR (50) NOT NULL,
department_name VARCHAR (50) NOT NULL,
price INTEGER NOT NULL,
stock_quantity INTEGER NOT NULL
);

INSERT INTO merch (product_name, department_name, price, stock_quantity)
VALUES ('Hoodie', 'Softline', 60, 12), 
('Jeans', 'Softline', 35, 8), 
('Carrots', 'Grociery', 1, 24),
('DVD', 'Electronics', 17, 20),
('Sunglasses', 'Fashion', 25, 18),
('Watch', 'Fashion', 70, 4),
('Television', 'Electronics', 300, 5),
('Corn', 'Grociery', 2, 30),
('Blanket', 'Home Furnishing', 30, 7),
('Bed Sheets', 'Home Furnishing', 35, 3),
('Pillow', 'Home Furnishing', 60, 12),
('TV Series Boxed Set', 'Electronics', 45, 8),
('Hammer', 'Hardware', 25, 8),
('Precision Screwdriver Set', 'Hardware', 18, 6),
('Ratchet Set', 'Hardware', 29, 8),
('Ring', 'Fashion', 12, 18),
('Socks', 'Softlines', 10, 10),
('Steak', 'Grociery', 12, 16),
('Frozen Pizza', 'Grociery', 4, 10),
('Root Beer', 'Grociery', 6, 8),
('Beer', 'Grociery', 16, 9),
('Headphones', 'Electronics', 19, 12),
('Baseball Cap', 'Soflines', 14, 10),
('Beanbag Chair', 'Home Furnishing', 80, 4),
('Rain Coat', 'Softlines', 30, 6),
('Phone Charger', 'Electronics', 12, 18);

SELECT * FROM merch;