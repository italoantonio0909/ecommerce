import { Controller } from '../../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';

export class BackofficeProductPaginateController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        try {
            const { limit, page } = req.params;
            const result = await this.product.paginate(parseInt(limit), parseInt(page));
            return res.status(201).send(result)
        } catch (error) {
        }
    }
}