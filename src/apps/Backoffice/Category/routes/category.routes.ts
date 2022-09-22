import { Router, Request, Response } from 'express';
import container from '../../dependency-injection';
import { CategorySaveController } from '../controllers/CategorySaveControllers';

export const register = (router: Router) => {

    const saveController = container.get<CategorySaveController>('Backoffice.Category.infrastructure.BackofficeCategorySaveController');
    router.post("/api/backoffice/category", (req: Request, resp: Response) => saveController.run(req, resp));

    // const updateController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategoryUpdateController');
    // router.put("/api/backoffice/category/:uid", updateController.run.bind(updateController));

    // const deleteController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategoryDeleteController');
    // router.delete("/api/backoffice/category/:uid", deleteController.run.bind(deleteController));

    // const paginateController = container.get('Backoffice.Catalogue.Category.infrastructure.BackofficeCategoryPaginateController');
    // router.get("/api/backoffice/category/paginate/:limit/:page", paginateController.run.bind(paginateController));
}