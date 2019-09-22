const express = require('express');
const fs = require('fs');
const util = require('util');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

let products = []

router.post("/product", (req, res, next)=> {        
    
    let data = req.body;
    products.push(data);
    console.log(products, data,"__--__--__--");
 
    const filePath = path.join(rootDir,'pages','displayProduct.html');    
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.sendFile(filePath, (err)=>{
        if (err) {
            console.log(err);            
        } else {
            console.log("file sent");
        }
    })
})

router.get("/product/data", (req, res, next) => {
    console.log("<><><><><><>");    
    res.status(200).json(products);
})

router.get("/add-product", (req, res, next)=> {
    let page = "";
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./pages/addProduct.html", (err, data)=> {
        if (err) {
            throw new Error(err.message);
        }
        page = data.toString();        
        res.send(page);        
    })
})

exports.Router = router;