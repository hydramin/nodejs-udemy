const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'udemy'
});

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected');
});

module.exports = connection;

