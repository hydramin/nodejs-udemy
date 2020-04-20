import { Router, Request, Response } from "express";
import { AdminController } from "../controller/admin-controller";

export const adminRoute = Router();

adminRoute.get('/', AdminController.prototype.adminHome);
adminRoute.get('/add-product', AdminController.prototype.getProducts);