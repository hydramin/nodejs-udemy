import mariadb, { createPool } from "mariadb";
import { Product } from "../model/product";

const pool = mariadb.createPool({
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

export class ProductDB {    

    constructor( ) {}

    saveProduct(product: Product) {
        pool.getConnection()
        .then((conn: mariadb.PoolConnection) => {
            
            conn.query('insert into PRODUCT (pname, price, descr) values(?,?,?)', 
                            [product.pname, product.price, product.descr])
                .then((success) => {
                    console.log(success);        
                })
        })
    }

    addProductPic(id: number, pic: string) {
        pool.getConnection()
            .then((conn: mariadb.PoolConnection) => {
                conn.query('update PRODUCT set pic = ? where id = ?;', [pic, id])
                    .then((success) => {
                        console.log(success);
                    })
            })
    }

    addProductDesc(id: number, descr: string) {
        pool.getConnection()
            .then((conn: mariadb.PoolConnection) => {
                conn.query('update PRODUCT set descr = ? where id = ?;', [descr, id])
                    .then((success) => {
                        console.log(success);
                    })
            })
    }
}
