import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackOfficeSubscribersPaginate } from '../../../application/paginate/BackofficeSubscriberPaginate';

export class BackofficeSubscriberPaginateController implements Controller {

    constructor(
        private readonly subscriber: BackOfficeSubscribersPaginate
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { limit, page } = req.params;
            const result = await this.subscriber.paginate(parseInt(limit), parseInt(page));
            return res.status(201).send(result);
        } catch (error) {
            next(error)
        }
    }
}