import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { ProductClassSaveController } from '../controllers/ProductClassSaveController';

export const register = (router: Router) => {

    const productClassSaveController = container.get<ProductClassSaveController>('Backoffice.productClass.ProductClassSaveController');
    router.post("/api/backoffice/product-class", (req: Request, resp: Response) => productClassSaveController.run(req, resp));
}