const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: process.env.MYSQL_SERVER,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

connection.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

app.get('/', (req, res) => {
connection.query(
    'SELECT * FROM users',
    (error, results) => {
        console.log(results);
        res.render('hello.ejs');
    }
);
});

  app.listen(3000);
