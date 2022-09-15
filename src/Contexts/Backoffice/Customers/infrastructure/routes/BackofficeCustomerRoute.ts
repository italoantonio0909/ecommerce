import { Router } from 'express';
import container from '../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const saveController = container.get('Backoffice.Customers.BackofficeCustomerPaginateController');
    router.post("/api/backoffice/customer", saveController.run.bind(saveController));

    const paginateController = container.get('Backoffice.Customers.BackofficeCustomerPaginateController');
    router.get("/api/backoffice/customer/paginate/:limit/:page", paginateController.run.bind(paginateController));
}