import { Controller } from '../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import { StockRecordSaveCommand } from '../../../Contexts/Backoffice/StockRecord/application/save/StockRecordSaveCommand';
import httpStatus from 'http-status';

export class StockRecordSaveController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {

        const id: string = req.body.id;
        const product: string = req.body.product;
        const partner: string = req.body.partner;
        const price_currency: string = req.body.price_currency;
        const price: number = req.body.price;
        const num_in_stock: number = req.body.num_in_stock;
        const num_allocated: number = req.body.num_allocated;
        const low_stock_threshold: number = req.body.low_stock_threshold;
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