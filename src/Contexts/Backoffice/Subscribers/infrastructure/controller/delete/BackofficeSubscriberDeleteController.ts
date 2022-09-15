import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficeSubscriberDelete } from '../../../application/delete/BackofficeSubscriberDelete';

export class BackofficeSubscriberDeleteController implements Controller {

    constructor(private readonly subscriber: BackofficeSubscriberDelete) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { subscriberId } = req.params;
            const result = await this.subscriber.delete(subscriberId)
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}