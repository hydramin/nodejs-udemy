const express = require('express');
const router = express.Router();
const shop = require('../controllers/shop-controller');


router.get('/', shop.displayAllProductsController)

router.post('/cart', shop.addToCartController);

router.get('/cart', shop.getCartForUserController)

router.post('/cart/delete/:pid', shop.deleteFromCartController);

module.exports = router;