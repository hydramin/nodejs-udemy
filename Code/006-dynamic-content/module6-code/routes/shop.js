const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res, next) => {
    db.query('SELECT * FROM products')
        .then((result) => {
            console.log(result, "<== display product result data");            
            res.render('shop', {products: result[0], path: "/shop"});
        })
})

module.exports = router;