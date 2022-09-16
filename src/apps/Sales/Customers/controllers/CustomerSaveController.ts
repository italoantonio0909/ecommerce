import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../controllers/Controller';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { CustomerSaveCommand } from '../../../../Contexts/Sales/Customers/application/save/CustomerSaveCommand';
import httpStatus from 'http-status';

export class CustomerSaveController implements Controller {

    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const displayName = req.body.displayName;

            const command = new CustomerSaveCommand({
                email,
                password,
                displayName
            });

            await this.commandBus.dispatch(command);

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send();
        }

        res.status(httpStatus.CREATED).send();
    }
}