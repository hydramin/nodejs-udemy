const db = require('../database/db');
const Product = require('../model/Product');

module.exports.save = (product) => {
    let query = `INSERT INTO products(product_name, price, picture, description) 
                 VALUES(?, ?, ?, ?)`;

    db.execute(query, [product.product_name, product.price, product.picture, product.description])
        .then((result) => {
            console.log(result," <== New Product Saved");
        })
        .catch((err) => {
            if(err) throw err;
        })
    }

module.exports.delete = (id) => {
    let query = `DELETE FROM products WHERE id = ?`;
    db.query(query, [id])
        .then(result => {
            console.log(result);                
        })
}

module.exports.fetchAllProducts = (callback) => {
    db.query('SELECT * FROM products')
        .then(result => {     
            this.products = result[0].map( row => {                               
                return new Product(row);
            })                  
            
            callback(this.products);
        })
}

module.exports.searchById = (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', id)
    .then((result) => {            
            let p = new Product(result[0][0]);
            callback(p);
        })
}


module.exports.modify = (data) => {
    db.query('UPDATE products SET product_name = ?, price = ?, description = ?, picture = ? WHERE id = ? ',
             [data.product_name, data.price, data.description, data.picture, data.id])
             .then(result => {
                 console.log(result);                 
             })
}

// Cart related db functions

module.exports.addToCart = (cart) => {
    db.query('INSERT INTO cart(userId, pid) VALUES (?, ?)', cart.getArray())
        .then(result => {
            console.log(result, 'Inserted into cart');            
        })
}

module.exports.getCartForUser = (callback) => {
    let query = `SELECT p.id, p.product_name, p.price, p.description, p.picture 
                 FROM cart c 
                 INNER JOIN products p 
                    ON c.pid = p.id 
                 WHERE c.userId = ?`
    db.query(query, 'amiafu')
        .then(result => {
            let rows = result[0];
            let products = rows.map(row => {
                return (new Product(row)).getShortned();
            });            
            
            callback(products);
        })
}

module.exports.deleteFromCart = (pid, userId) => {
    db.query('DELETE FROM cart WHERE pid = ? and userId = ?', [pid, userId])
        .then(result => {
            console.log(result, '<<-->> Deleted');            
        })
}