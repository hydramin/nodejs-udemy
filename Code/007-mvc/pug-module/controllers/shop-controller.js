const dbUtil = require('../database/dbUtil');
const Cart = require('../model/cart');

module.exports.displayAllProductsController = (req, res, next) => {       
    dbUtil.fetchAllProducts(products => {        
        const end = 30;
        
        products.forEach(element => {           
            if(element.description.length > end) {
                element.description = element.description.slice(0,end);
            }
        });

        res.render('shop', {products: products, path: "/shop", title: 'Shop'});
    })
}

module.exports.addToCartController = (req, res, next) => {
    let pid = +req.body.pid;

    let cart = new Cart(pid, 'amiafu');
    dbUtil.addToCart(cart);    
    res.redirect('/shop');
}

module.exports.getCartForUserController = (req, res, next) => {
    // let pid = +req.body.pid;

    dbUtil.getCartForUser(products => {
        res.render('cart', {products: products, path: '/shop/cart'})
    })
}

module.exports.deleteFromCartController = (req, res, next) => {
    let pid = +req.params.pid;
    console.log(pid);
    
    dbUtil.deleteFromCart(pid, 'amiafu');
    res.redirect('/shop/cart');
}