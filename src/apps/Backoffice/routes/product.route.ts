import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { ProductSaveController } from '../controllers/ProductSaveController';

export const register = (router: Router) => {

    const productSaveController = container.get<ProductSaveController>('Backoffice.product.ProductSaveController');
    router.post("/api/backoffice/product", (req: Request, resp: Response) => productSaveController.run(req, resp));
}