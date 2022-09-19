import { Response, Request } from 'express';
import { Controller } from '../../controllers/Controller';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';
import { CustomerSaveCommand } from '../../../../Contexts/Sales/Customers/application/save/CustomerSaveCommand';
import httpStatus from 'http-status';

export class CustomerSaveController implements Controller {

    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const id = req.body.id;
        const email = req.body.email;
        const password = req.body.password;
        const displayName = req.body.displayName;

        try {
            const command = new CustomerSaveCommand({ id, email, password, displayName });

            await this.commandBus.dispatch(command);

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }

        res.status(httpStatus.CREATED).send();
    }
}