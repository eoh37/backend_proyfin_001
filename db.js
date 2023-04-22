const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'books_base'
});

// Connect
db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('MySQL Connected...');
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE books_base';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createtable', (req, res) => {
    let sql = 'CREATE TABLE books (c_title VARCHAR(255) NOT NULL, c_pages INT NOT NULL, c_date_of_publication DATE NOT NULL, c_editorial VARCHAR(255) NOT NULL, c_primary_key INT NOT NULL AUTO_INCREMENT, PRIMARY KEY (c_primary_key))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Table created...');
    });
});

// Insert book
app.get('/addbook', (req, res) => {
    let book = {title: 'The Catcher in the Rye', pages: 224, date_of_publication: '1951-07-16', editorial: 'Little, Brown and Company'};
    let sql = 'INSERT INTO books SET ?';
    let query = db.query(sql, book, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Book added...');
    });
});

// Select books
app.get('/getbooks', (req, res) => {
    let sql = 'SELECT * FROM books';
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.send('Books fetched...');
    });
});

// Server
app.listen('3000', () => {
    console.log('Server started on port 3000');
});
