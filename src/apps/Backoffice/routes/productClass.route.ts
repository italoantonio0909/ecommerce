import { Router, Response, Request } from 'express';
import container from '../dependency-injection';
import { ProductClassSaveController } from '../controllers/ProductClassSaveController';

export const register = (router: Router) => {

    const saveController = container.get<ProductClassSaveController>('Backoffice.productClass.ProductClassSaveController');
    router.post("/api/backoffice/product-class", (req: Request, resp: Response) => saveController.run(req, resp));

}