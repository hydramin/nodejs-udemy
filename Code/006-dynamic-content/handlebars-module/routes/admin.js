const express = require('express');
const fs = require('fs');
const util = require('util');
const path = require('path');
const rootDir = require('../util/path');
const db = require('../database/db');

const router = express.Router();

//adds products to the db
router.post("/add-product", (req, res, next)=> {    
    //body = {product_name, price, picture}
    let data = req.body;  
    // add to product to db    
    let query = `INSERT INTO products(product_name, price, picture) 
                VALUES(?, ?, ?)`;
    
    db.execute(query, [data.product_name, data.price, data.picture])
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            if(err) throw err;
        })
    res.render("addProduct", {title: 'Add Product', addProductPage: "/admin/add-product"});
})

//product adding form page
router.get("/add-product", (req, res, next)=> {
    res.render('addProduct', {title: 'Add Product', addProductPage: "/admin/add-product"});
})

// display the prodcuts in a table
router.get("/product/data", (req, res, next) => {       
    // fetch the products from the database
    db.query('SELECT * FROM products')
        .then((result) => {
            // console.log(result, "<== display product result data");            
            res.render('displayProduct', {products: result[0], displayProductPage: "/admin/product/data"});
        })
})

router.get("/product/modify", (req, res, next) => {
    let id = req.query['id'];
    
    db.query('SELECT * FROM products WHERE id = ?', id)
    .then((result) => {
            console.log(result[0][0]);
            res.render('addProduct', {products: result[0][0], addProductPage: "/admin/product/modify"});
        })
})

router.post('/product/modify', (req, res, next) => {
    let data = req.body;
    console.log(data.description);
    
    db.query('UPDATE products SET product_name = ?, price = ?, description = ?, picture = ? WHERE id = ? ',
             [data.product_name, data.price, data.description, data.picture, data.id])
             .then(result => {
                 console.log(result);                 
                 res.redirect('/admin/product/data')
             })
})
exports.Router = router;