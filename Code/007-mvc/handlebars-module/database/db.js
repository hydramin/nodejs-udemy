const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'udemy'
});

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourpassword';
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected');

    // connection.execute('CREATE DATABASE IF NOT EXISTS udemy', (err, result) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(result, " <-- create db");
    // });

    // connection.changeUser({ database: 'udemy' }, (err, result) => {
    //     if (err) throw err;
    //     console.log(result, " <-- set db");
    // })
});

let create_table = `CREATE TABLE IF NOT EXISTS PRODUCTS (
                        id INT(5) NOT NULL AUTO_INCREMENT,
                        product_name VARCHAR(15) NOT NULL DEFAULT "XXX",
                        product_type VARCHAR(15) DEFAULT NULL, 
                        amount INT(5) DEFAULT 0,
                        PRIMARY KEY(id)
                    )`;


connection.execute(create_table, (err, result) => {
    if (err) throw err;
    console.log(result, " <-- create table");
})

module.exports = connection.promise();

