const Product = require('../model/Product');
const dbUtil = require('../database/dbUtil');

module.exports.addProductController = (req, res, next)=> { 
    //body = {product_name, price, picture}
    let data = req.body;  
    // add to product to db    
    dbUtil.save(new Product(data));    
    
    res.redirect("/admin/add-product");
}

module.exports.getAddProductPageController = (req, res, next)=> {
    res.render('addProduct', {title: 'Add Product', path: "/admin/add-product"});    
}

module.exports.displayAllProductsController = (req, res, next) => {       
    dbUtil.fetchAllProducts(products => {
        res.render('displayProduct', {products: products, path: "/admin/product/data", title: 'Products'});
    })
}

module.exports.deleteOneProduct = (req, res, next) => {     
     dbUtil.delete(+req.params.id);
     res.redirect('/admin/product/data');
}

module.exports.getModifyOneProductPage = (req, res, next) => {
    let id = +req.params.id;
    
    dbUtil.searchById(id, product => {
        res.render('addProduct', {product: product, path: "/admin/product/modify/:id"});
    })
}

module.exports.modifyOneProduct = (req, res, next) => {
    let id = +req.params.id;
    let data = {id: id, ...req.body};    
    dbUtil.modify(data);
    res.redirect('/admin/product/data')
}