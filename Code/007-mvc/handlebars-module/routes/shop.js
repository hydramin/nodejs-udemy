const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res, next) => {
    db.query('SELECT * FROM products')
        .then((result) => {
            let data = result[0];
            const end = 30;
            data.forEach(element => {
                if(element.description.length > end) {
                    element.description = element.description.slice(0,end);
                }
            });
            res.render('shop', {products: result[0], shopPage: "/shop"});
        })
})

module.exports = router;