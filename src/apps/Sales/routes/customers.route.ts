import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CustomerSaveController } from '../controllers/CustomerSaveController';

export const register = (router: Router) => {

    const customerSaveController = container.get<CustomerSaveController>('Sales.customers.CustomerSaveController');
    router.post("/api/customers",
        (req: Request, res: Response) => customerSaveController.run(req, res));
}