const db = require("./db");
const util = require("util");


//ALTER TABLE table_name MODIFY col_name VARCHAR(10000)

function insert(data){
    //data = {name: "xxx", height: xxx}
    let id = Math.floor(Math.random() * 100);
    let sql = util.format("insert into person(id, name, height) values (%d, '%s', %d)", id, data.name, data.height);
    console.log(sql);    
    db.query(sql, (err, result, fields) => {
        if (err) {
            throw err;
        }
        return result;
    });
}

function selectByName(name, cb) {
    if(name == null || name == "") throw new Error("invalid name");
    
    let sql = util.format("select * from person where name = '%s'",name);
        
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result, fields) => {
            if (err) {
                reject(err);
            }        
            resolve(result[0]);
        });
    });
}

function fetchAll() {

    return new Promise((resolve, reject) => {
        db.query("select * from person", (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    })
}

module.exports = {
    insert: insert,
    selectByName: selectByName,
    fetchAll: fetchAll
}