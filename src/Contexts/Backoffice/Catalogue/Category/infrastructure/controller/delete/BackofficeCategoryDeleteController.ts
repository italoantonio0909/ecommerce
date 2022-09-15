import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { BackofficeCategory } from "../../../domain/BackofficeCategory";
import { BackofficeCategoryDelete } from '../../../application/delete/BackofficeCategoryDelete';

export class BackofficeCategoryDeleteController implements Controller {

    constructor(
        private readonly category: BackofficeCategoryDelete
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { uid } = req.params;
            const data = req.body as BackofficeCategory
            const result = await this.category.delete(uid, data)
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}