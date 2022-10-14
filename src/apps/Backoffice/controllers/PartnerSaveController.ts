import httpStatus from 'http-status';
import { Response, Request } from 'express';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import { Controller } from './Controller';
import { PartnerSaveCommand } from '../../../Contexts/Backoffice/Partner/application/save/PartnerSaveCommand';

export class PartnerSaveController implements Controller {

    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const id = req.body.id;
        const code = req.body.code;
        const name = req.body.name;
        const created_at = req.body.created_at;

        const command = new PartnerSaveCommand({ id, code, name, created_at });

        try {
            await this.commandBus.dispatch(command);

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }

        res.status(httpStatus.CREATED).send();
    }
}