import { Controller } from '../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import httpStatus from 'http-status';
import { ProductClassSaveCommand } from '../../../Contexts/Backoffice/ProductClass/application/save/ProductClassSaveCommand';

export class ProductClassSaveController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const id = req.body.id;
        const name = req.body.name;
        const required_shipping: boolean = req.body.required_shipping;
        const track_stock: boolean = req.body.track_stock;
        const created_at: Date = req.body.created_at;

        try {
            const command = new ProductClassSaveCommand({ id, name, required_shipping, track_stock, created_at });
            await this.commandBus.dispatch(command);
        } catch (error) {
            res.status(httpStatus.BAD_REQUEST);
        }

        res.status(httpStatus.CREATED).send();
    }
}