import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProductUpdate } from '../../../application/update/BackofficeProductUpdate';
import { BackofficeProduct } from '../../../domain/Product';

export class BackofficeProductUpdateController implements Controller {
    constructor(
        private readonly product: BackofficeProductUpdate
    ) { }

    async run(req: Request, res: Response) {
        try {
            const { uid } = req.params;
            const product = req.body as Partial<BackofficeProduct>;
            const result = await this.product.update(uid, product);
            return res.status(201).send(result)
        } catch (error) {

        }
    }
}