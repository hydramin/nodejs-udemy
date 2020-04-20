import { Router, Request, Response } from "express";

export const shopRouter = Router();
// klkj

shopRouter.get('/', (req: Request, res: Response) => {
    res.render('shop');
}); 