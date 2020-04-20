"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controller/admin-controller");
exports.adminRoute = express_1.Router();
exports.adminRoute.get('/', admin_controller_1.AdminController.prototype.adminHome);
exports.adminRoute.get('/add-product', admin_controller_1.AdminController.prototype.getProducts);
//# sourceMappingURL=admin.js.map