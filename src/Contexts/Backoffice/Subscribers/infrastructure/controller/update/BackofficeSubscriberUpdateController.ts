import { Response, Request, NextFunction } from 'express';
import { BackofficeSubscriber } from '../../../domain/BackofficeSubscriber';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficeSubscriberUpdate } from '../../../application/update/BackofficeSubscriberUpdate';

export class BackofficeSubscriberUpdateController implements Controller {

    constructor(private subscriber: BackofficeSubscriberUpdate) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { subscriberId } = req.params;
            const subscriber = req.body as BackofficeSubscriber;
            const result = await this.subscriber.update(subscriberId, subscriber);
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}