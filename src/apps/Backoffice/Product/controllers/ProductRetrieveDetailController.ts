import { Controller } from '../../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProductRetrieveDetail } from '../../../../Contexts/Backoffice/Product/application/retrieveDetail/ProductRetrieveDetail';
import { CommandBus } from '../../../../Contexts/Shared/domain/CommandBus';

export class BackofficeProductRetrieveDetailController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        try {
            const { uid } = req.params;
            const result = await this.product.retrieveDetail(uid);
            return res.status(201).send(result)
        } catch (error) {

        }
    }
}