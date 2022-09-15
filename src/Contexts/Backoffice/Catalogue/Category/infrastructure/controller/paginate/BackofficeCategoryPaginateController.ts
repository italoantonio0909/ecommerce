import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { BackofficeCategoryPaginate } from "../../../application/paginate/BackofficeCategoryPaginate";

export class BackofficeCategoryPaginateController implements Controller {

    constructor(
        private readonly category: BackofficeCategoryPaginate
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { limit, page } = req.params;
            const result = await this.category.paginate(parseInt(limit), parseInt(page))
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}