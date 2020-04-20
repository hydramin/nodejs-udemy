"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mariadb_1 = __importDefault(require("mariadb"));
const pool = mariadb_1.default.createPool({
    host: 'localhost',
    user: 'amin',
    password: '1234',
    database: 'UDEMY',
    connectionLimit: 5
});
// pool.getConnection()
//     .then((conn: mariadb.PoolConnection) => {
//         // conn.query('CREATE TABLE IF NOT EXISTS PRODUCTS (id INT NOT NULL AUTO INCREMENT)')
//         console.log(999999999);
//         conn.query('SELECT * FROM mentor')
//             .then((success) => {
//                 console.log(success);        
//             })
//     })
// export function saveProduct(product: Product) {
//     pool.getConnection()
//     .then((conn: mariadb.PoolConnection) => {
//         conn.query('insert into PRODUCT (pname, price, descr) values(?,?,?)', 
//                         [product.pname, product.price, product.desc])
//             .then((success) => {
//                 console.log(success);        
//             })
//     })
// }
class ProductDB {
    constructor() { }
    saveProduct(product) {
        pool.getConnection()
            .then((conn) => {
            conn.query('insert into PRODUCT (pname, price, descr) values(?,?,?)', [product.pname, product.price, product.descr])
                .then((success) => {
                console.log(success);
            });
        });
    }
    addProductPic(id, pic) {
        pool.getConnection()
            .then((conn) => {
            conn.query('update PRODUCT set pic = ? where id = ?;', [pic, id])
                .then((success) => {
                console.log(success);
            });
        });
    }
    addProductDesc(id, descr) {
        pool.getConnection()
            .then((conn) => {
            conn.query('update PRODUCT set descr = ? where id = ?;', [descr, id])
                .then((success) => {
                console.log(success);
            });
        });
    }
}
exports.ProductDB = ProductDB;
//# sourceMappingURL=db.js.map