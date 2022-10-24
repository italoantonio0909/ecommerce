import { StockRecordRepository } from "../../domain/StockRecordRepository";
import { ProductId } from '../../../Product/domain/ProductId';
import { PartnerId } from '../../../Partner/domain/PartnerId';
import { StockRecordPriceCurrency } from '../../domain/StockRecordPriceCurrency';
import { StockRecordNumInStock } from '../../domain/StockRecordNumInStock';
import { StockRecordPrice } from "../../domain/StockRecordPrice";
import { StockRecordNumAllocated } from '../../domain/StockRecordNumAllocated';
import { StockRecordLowStockThreshold } from '../../domain/StockRecordLowStockThreshold';
import { StockRecordCreatedAt } from '../../domain/StockRecordCreatedAt';
import { StockRecord } from "../../domain/StockRecord";
import { StockRecordId } from '../../domain/StockRecordId';

type Params = {
    id: StockRecordId;
    product: ProductId;
    partner: PartnerId;
    price_currency: StockRecordPriceCurrency;
    price: StockRecordPrice;
    num_in_stock: StockRecordNumInStock;
    num_allocated: StockRecordNumAllocated;
    low_stock_threshold: StockRecordLowStockThreshold;
    created_at: StockRecordCreatedAt;
}

export class StockRecordSave {
    constructor(private repository: StockRecordRepository) { }

    async run({ id, product, price, created_at, low_stock_threshold, num_allocated, num_in_stock, partner, price_currency }: Params) {

        const stockRecord = new StockRecord(id, product, partner, price_currency, price, num_in_stock, num_allocated, low_stock_threshold, created_at);

        await this.repository.save(stockRecord);
    }
}