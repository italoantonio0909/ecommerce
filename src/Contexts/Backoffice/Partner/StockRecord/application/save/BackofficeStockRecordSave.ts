import { BackofficeStockRecord } from "../../domain/BackofficeStockRecord";
import { BackofficeStockRecordRepository } from '../../domain/BackofficeStockRecordRepository';
import { BackofficePartner } from '../../../Partner/domain/BackofficePartner';
import { BackofficeProduct } from '../../../../Catalogue/Product/domain/BackofficeProduct';

export class BackofficeStockRecordSave {
    constructor(
        private repository: BackofficeStockRecordRepository
    ) { }

    async create(
        low_stock_threshold: number,
        price: number,
        price_currency: string,
        product: BackofficeProduct,
        num_allocated: number,
        num_in_stock: number,
        partner: BackofficePartner) {

        const created_at = new Date().getTime();
        const stockRecord = BackofficeStockRecord.create(
            product,
            partner,
            price_currency,
            price,
            num_in_stock,
            num_allocated,
            low_stock_threshold,
            created_at
        );

        return await this.repository.save(stockRecord)
    }
}