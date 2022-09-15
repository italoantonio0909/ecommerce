import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficeSubscriberTotal } from '../../../application/total/BackofficeSubscriberTotal';

export class BackofficeSubscriberTotalController implements Controller {

    constructor(
        private readonly subscriber: BackofficeSubscriberTotal
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.subscriber.total()
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}