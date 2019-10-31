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
    console.log(data, "<-- data of product");
    
    let query = `INSERT INTO products(product_name, price, picture) 
                VALUES(?, ?, ?)`;
    
    db.execute(query, [data.product_name, data.price, data.picture])
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            if(err) throw err;
        })
    res.render("addProduct", {title: 'Add Product', path: "/admin/add-product"});
})

//product adding form page
router.get("/add-product", (req, res, next)=> {
    res.render('addProduct', {title: 'Add Product', path: "/admin/add-product"});
})

// display the prodcuts in a table
router.get("/product/data", (req, res, next) => {       
    // fetch the products from the database
    db.query('SELECT * FROM products')
        .then((result) => {
            console.log(result, "<== display product result data");            
            res.render('displayProduct', {products: result[0], path: "/admin/product/data"});
        })

    
})

exports.Router = router;