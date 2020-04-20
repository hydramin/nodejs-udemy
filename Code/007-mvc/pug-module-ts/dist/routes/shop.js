"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.shopRouter = express_1.Router();
// klkj
exports.shopRouter.get('/', (req, res) => {
    res.render('shop');
});
//# sourceMappingURL=shop.js.map