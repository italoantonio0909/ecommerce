import httpStatus from 'http-status';
import { Response, Request } from 'express';
import { SubscriberSaveCommand } from '../../../Contexts/Sales/Subscribers/application/save/SubscriberSaveCommand';
import { SubscriberAlreadyExists } from '../../../Contexts/Sales/Subscribers/domain/SubscriberAlreadyExists';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import { Controller } from './Controller';

export class SubscriberSaveController implements Controller {

    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const id = req.body.id;
        const email = req.body.email;
        const status = req.body.status;
        const created_at: Date = req.body.created_at;

        const command = new SubscriberSaveCommand({ id, email, status, created_at });

        try {
            await this.commandBus.dispatch(command);

        } catch (error) {
            if (error instanceof SubscriberAlreadyExists) {
                res.status(httpStatus.BAD_REQUEST).send(error.message);
            }
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }

        res.status(httpStatus.CREATED).send();
    }
}