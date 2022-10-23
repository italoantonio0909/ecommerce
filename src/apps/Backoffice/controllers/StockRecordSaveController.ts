import { Controller } from '../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import { StockRecordSaveCommand } from '../../../Contexts/Backoffice/StockRecord/application/save/StockRecordSaveCommand';
import httpStatus from 'http-status';

export class StockRecordSaveController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {

        const id: string = req.body.id;
        const product: string = req.body.structure;
        const partner: string = req.body.is_public;
        const price_currency: string = req.body.parent;
        const price: number = req.body.title;
        const num_in_stock: number = req.body.description;
        const num_allocated: number = req.body.meta_title;
        const low_stock_threshold: number = req.body.meta_description;
        const created_at: Date = req.body.created_at;

        try {

            const command = new StockRecordSaveCommand({
                id,
                product,
                partner,
                price_currency,
                price,
                num_in_stock,
                num_allocated,
                low_stock_threshold,
                created_at
            });

            await this.commandBus.dispatch(command);

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }

        res.status(httpStatus.CREATED).send();

    }
}