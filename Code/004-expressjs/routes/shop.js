const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1> This is the shop </h1><br>\
              <a href="/admin/add-product">Add product</a>');
})

module.exports = router;