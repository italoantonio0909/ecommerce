import { Router } from 'express';
import container from '../../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const createController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategorySaveController');
    router.post("/api/backoffice/category", createController.run.bind(createController));

    const updateController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategoryUpdateController');
    router.put("/api/backoffice/category/:uid", updateController.run.bind(updateController));

    const deleteController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategoryDeleteController');
    router.delete("/api/backoffice/category/:uid", deleteController.run.bind(deleteController));

    const paginateController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategoryPaginateController');
    router.get("/api/backoffice/category/paginate/:limit/:page", paginateController.run.bind(paginateController));
}