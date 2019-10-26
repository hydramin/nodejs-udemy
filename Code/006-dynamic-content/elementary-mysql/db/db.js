const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "nadia",
    password: "Hujintao@20",
    database: "customer"
})

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected!");
})

module.exports = connection;