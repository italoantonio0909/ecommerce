import { Router } from 'express';
import container from '../../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const createController = container.get('Backoffice.Catalogue.ProductClass.BackofficeProductClassSaveController');
    router.post("/api/backoffice/product-class", createController.run.bind(createController));

    const paginateController = container.get('Backoffice.Catalogue.ProductClass.BackofficeProductClassPaginateController');
    router.get("/api/backoffice/product-class/paginate/:limitOfDocuments/:page", paginateController.run.bind(paginateController));

}