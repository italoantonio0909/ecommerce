import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { BackofficeStockRecord } from '../../../domain/BackofficeStockRecord';
import { BackofficeStockRecordSave } from '../../../application/save/BackofficeStockRecordSave';
import { BackofficeProduct } from '../../../../../Catalogue/Product/domain/BackofficeProduct';
import { BackofficePartner } from '../../../../Partner/domain/BackofficePartner';

export class BackofficeStockRecordSaveController implements Controller {

    constructor(
        private readonly stockRecord: BackofficeStockRecordSave
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const low_stock_threshold: number = req.body.low_stock_threshold;
            const price: number = req.body.price;
            const price_currency = req.body.price_currency;
            const product: BackofficeProduct = req.body.price_currency;
            const num_allocated: number = req.body.num_allocated;
            const num_in_stock: number = req.body.num_in_stock;
            const partner: BackofficePartner = req.body.partner;

            await this.stockRecord.create(
                low_stock_threshold,
                price,
                price_currency,
                product,
                num_allocated,
                num_in_stock,
                partner
            );
            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    }
}