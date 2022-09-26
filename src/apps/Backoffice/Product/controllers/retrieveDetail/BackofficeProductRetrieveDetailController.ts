import { Controller } from '../../../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProductRetrieveDetail } from '../../../../../Contexts/Backoffice/Product/application/retrieveDetail/ProductRetrieveDetail';

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