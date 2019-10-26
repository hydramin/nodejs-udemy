const express = require('express');
const router = express.Router();
const util = require('util');
const dbService = require('../db/dbService');
const db =  require('../db/db');


router.get("/", (req, res, next) => {
    let all = req.query['all'];
    if (all === "asdf") {
        dbService.fetchAll()
            .then((rez) => {
                let t = ""
                rez.forEach(e => {
                    t += "<tr><td>"+e.id+"</td> <td>"+e.name+"</td> <td>"+e.height+"</td></tr>"
                });
                res.send("<html><head><title>All People</title></head><body><table style='border: solid'>"+t+"</table></body></html>");
            })
    } else {
        next();
    }  
})

router.get('/', (req, res, next) => {
    let name = req.query['byName'];
    dbService.selectByName(name)
        .then((r)=> {
            res.send("<html><head><title>Search results</title></head><body><a href='/insert'>Back</a><table><tr><td>"+r['id']+"</td><td>"+r['name']+"</td><td>"+r['height']+"</td></tr></table></body></html>");
        })    
        
    // res.send("the get request has finished");
})

module.exports = router;