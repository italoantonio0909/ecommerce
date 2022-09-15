import { NextFunction, Request, Response } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficeCustomerPaginate } from '../../../application/paginate/BackofficeCustomerPaginate';

export class BackofficeCustomerPaginateController implements Controller {
    constructor(
        private readonly customerPaginate: BackofficeCustomerPaginate
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { limit, pageToken } = req.params;
            const result = await this.customerPaginate.paginate(parseInt(limit), pageToken);
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}