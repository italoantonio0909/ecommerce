import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProductRetrieveDetail } from '../../../application/retrieveDetail/BackofficeProductRetrieveDetail';

export class BackofficeProductRetrieveDetailController implements Controller {
    constructor(
        private readonly product: BackofficeProductRetrieveDetail
    ) { }

    async run(req: Request, res: Response) {
        try {
            const { uid } = req.params;
            const result = await this.product.retrieveDetail(uid);
            return res.status(201).send(result)
        } catch (error) {

        }
    }
}