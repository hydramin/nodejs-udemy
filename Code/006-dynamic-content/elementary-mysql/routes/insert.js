const express = require("express");
const route = express.Router();
const dbService = require("../db/dbService");
const fs = require('fs');
const path = require('path');
const rootPath = path.dirname(process.mainModule.filename);


route.get("/", (req, res, next) => {
    let filePath = path.join(rootPath, "view", "person.html");
    fs.readFile(filePath, (err, data) => {
        if(err) throw err;
        res.status(200).send(data.toString());
    })
})

route.post("/", (req, res, next) => {
    
    const body = {name: req.body['name'], height: +req.body['height']};
    dbService.insert(body);

    res.send("insertion point established");
})

module.exports = route;