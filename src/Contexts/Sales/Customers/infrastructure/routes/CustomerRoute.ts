import { Router } from 'express';
import container from '../../../../../apps/backend/dependency-injection';
import { CustomerSaveController } from '../controller/save/CustomerSaveController';

export const register = (router: Router) => {

    const saveController = container.get<CustomerSaveController>('Sales.customers.CustomerSaveController');
    router.post("/api/customers", saveController.run.bind(saveController));
}