import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProductsPaginate } from '../../../application/paginate/BackofficeProductsPaginate';

export class BackofficeProductPaginateController implements Controller {
    constructor(
        private readonly product: BackofficeProductsPaginate
    ) { }

    async run(req: Request, res: Response) {
        try {
            const { limit, page } = req.params;
            const result = await this.product.paginate(parseInt(limit), parseInt(page));
            return res.status(201).send(result)
        } catch (error) {
        }
    }
}