import { Router } from 'express';
import container from '../../dependency-injection';

export const register = (router: Router) => {

    const createController = container.get('Backoffice.Catalogue.Product.BackofficeProductSaveController');
    router.post("/api/backoffice/product", createController.run.bind(createController));

    const updateController = container.get('Backoffice.Catalogue.Product.BackofficeProductUpdateController');
    router.put("/api/backoffice/product/:uid", updateController.run.bind(updateController));

    const paginateController = container.get('Backoffice.Catalogue.Product.BackofficeProductPaginateController');
    router.get("/api/backoffice/product/paginate/:limit/:page", paginateController.run.bind(paginateController));

    const retrieveDetailController = container.get('Backoffice.Catalogue.Product.BackofficeProductRetrieveDetailController');
    router.get("/api/backoffice/product/retrieve/:uid", retrieveDetailController.run.bind(retrieveDetailController));
}