CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;

CREATE TABLE products (

item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(70) NOT NULL,
department_name VARCHAR(70) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Doritos", "groceries", 2.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bambas", "groceries", 1.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung LED UHD TV", "electronics", 1299.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brita replacement filters", "kitchen", 19.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hanes white t-shirts five-pack", "apparel", 9.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vampirina plush doll", "toys", 15.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Queen: Greatest Hits CD", "music", 19.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Aveeno body lotion", "health & beauty", 10.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Puppy-licious dog biscuits", "pet supplies", 8.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coding for Dummies", "books", 20.99, 100);

SELECT * FROM products