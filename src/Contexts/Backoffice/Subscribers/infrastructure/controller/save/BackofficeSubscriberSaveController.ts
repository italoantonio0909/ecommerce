import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackOfficeSubscriberSave } from "../../../application/save/BackofficeSubscriberSave";

export class BackofficeSubscriberCreateController implements Controller {

    constructor(private subscriber: BackOfficeSubscriberSave) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const email: string = req.body.email;
            const result = await this.subscriber.create(email);
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}