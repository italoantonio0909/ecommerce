import { Response, Request, NextFunction } from 'express';
import httpStatus from 'http-status';
import { SubscriberSaveCommand } from '../../../../Contexts/Sales/Subscribers/application/save/SubscriberSaveCommand';
import { SubscriberAlreadyExists } from '../../../../Contexts/Sales/Subscribers/domain/SubscriberAlreadyExists';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { Controller } from '../../controllers/Controller';

export class SubscriberSaveController implements Controller {

    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email;
            const command = new SubscriberSaveCommand({ email });

            await this.commandBus.dispatch(command);

        } catch (error) {
            if (error instanceof SubscriberAlreadyExists) {
                res.status(httpStatus.BAD_REQUEST).send(error.message);
            }
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
        }

        return res.status(httpStatus.CREATED).send();
    }
}