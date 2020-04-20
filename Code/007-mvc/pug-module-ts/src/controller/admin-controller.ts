import { Product } from "../model/product";
import { Response, Request } from "express";
import { ProductDB } from "../db/db";


export class AdminController {

    constructor() {}

    adminHome(req: Request, res: Response) {
        const pic = 'https://miro.medium.com/max/1400/0*f81bU2qWpP51WWWC.jpg';     
        const products = [
            new Product(1,'nike shoes', 100, 'white exercise', pic),
            new Product(1,'rebook shoes', 200, 'blue exercise', pic),
            new Product(1,'adidas shoes', 300, 'red exercise', pic)
        ];
        res.render('admin', {products: products});
    }

    getProducts(req: Request, res: Response) {

        const pic = 'https://miro.medium.com/max/1400/0*f81bU2qWpP51WWWC.jpg';     
        const products = [
            new Product(1,'nike shoes', 100, 'white exercise', pic),
            new Product(1,'rebook shoes', 200, 'blue exercise', pic),
            new Product(1,'adidas shoes', 300, 'red exercise', pic)
        ];

        res.json(products);
    }
}