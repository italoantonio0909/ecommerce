import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { NextFunction, Request, Response } from 'express';
import { BackofficeProductClassPaginate } from '../../../application/paginate/BackofficeProductClassPaginate';

export class BackofficeProductClassPaginateController implements Controller {
    constructor(
        private readonly product: BackofficeProductClassPaginate
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { limitOfDocuments, page } = req.params;
            const result = await this.product.paginate(parseInt(limitOfDocuments), parseInt(page))
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}