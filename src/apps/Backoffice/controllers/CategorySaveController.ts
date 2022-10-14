import httpStatus from 'http-status';
import { Response, Request } from 'express';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import { Controller } from './Controller';
import { CategorySaveCommand } from '../../../Contexts/Backoffice/Category/application/save/CategorySaveCommand';
import { CategoryAlreadyExists } from '../../../Contexts/Backoffice/Category/domain/CategoryAlreadyExists';

export class CategorySaveController implements Controller {

    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const id = req.body.id;
        const name = req.body.name;
        const description = req.body.description;
        const is_public = req.body.is_public;
        const created_at = req.body.created_at;

        const command = new CategorySaveCommand({ id, name, description, is_public, created_at });

        try {
            await this.commandBus.dispatch(command);

        } catch (error) {
            if (error instanceof CategoryAlreadyExists) {
                res.status(httpStatus.BAD_REQUEST).send(error.message);
            }
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }

        res.status(httpStatus.CREATED).send();
    }
}