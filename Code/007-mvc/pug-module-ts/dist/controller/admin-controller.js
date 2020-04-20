"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class AdminController {
    constructor() { }
    adminHome(req, res) {
        const pic = 'https://miro.medium.com/max/1400/0*f81bU2qWpP51WWWC.jpg';
        const products = [
            new product_1.Product(1, 'nike shoes', 100, 'white exercise', pic),
            new product_1.Product(1, 'rebook shoes', 200, 'blue exercise', pic),
            new product_1.Product(1, 'adidas shoes', 300, 'red exercise', pic)
        ];
        res.render('admin', { products: products });
    }
    getProducts(req, res) {
        const pic = 'https://miro.medium.com/max/1400/0*f81bU2qWpP51WWWC.jpg';
        const products = [
            new product_1.Product(1, 'nike shoes', 100, 'white exercise', pic),
            new product_1.Product(1, 'rebook shoes', 200, 'blue exercise', pic),
            new product_1.Product(1, 'adidas shoes', 300, 'red exercise', pic)
        ];
        res.json(products);
    }
}
exports.AdminController = AdminController;
//# sourceMappingURL=admin-controller.js.map