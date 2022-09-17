import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProductClassSave } from '../../../application/save/BackofficeProductClassSave';

export class BackofficeProductClassSaveController implements Controller {
    constructor(
        private readonly product: BackofficeProductClassSave
    ) { }

    async run(req: Request, res: Response) {
        try {
            const name: string = req.body.name;
            const required_shipping: boolean = req.body.required_shipping;
            const track_stock: boolean = req.body.track_stock;

            const result = await this.product.create(name, required_shipping, track_stock);
            return res.status(201).send(result)
        } catch (error) {
        }
    }
}