const express = require('express');
const fs = require('fs');
const util = require('util');
const path = require('path');
const rootDir = require('../util/path');
const db = require('../database/db');
const admin = require('../controllers/admin-controller');

const router = express.Router();

//adds products to the db
router.post("/add-product", admin.addProductController);

//product adding form page
router.get("/add-product", admin.getAddProductPageController);

// display the prodcuts in a table
router.get("/product/data", admin.displayAllProductsController);

router.get("/product/delete/:id", admin.deleteOneProduct);

router.get("/product/modify/:id", admin.getModifyOneProductPage);

router.post('/product/modify/:id', admin.modifyOneProduct);

exports.Router = router;