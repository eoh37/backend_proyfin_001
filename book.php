CREATE DATABASE books_base;

CREATE TABLE books (
    c_title VARCHAR(255) NOT NULL,
    c_pages INT NOT NULL,
    c_date_of_publication DATE NOT NULL,
    c_editorial VARCHAR(255) NOT NULL,
    c_primary_key INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (c_primary_key)
);

CREATE TABLE authors_base (
    c_name VARCHAR(255) NOT NULL,
    c_surname VARCHAR(255) NOT NULL,
    c_primary_key INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (c_primary_key)
);



