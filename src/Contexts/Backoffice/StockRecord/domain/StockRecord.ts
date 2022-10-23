import { ProductId } from '../../Product/domain/ProductId';
import { PartnerId } from '../../Partner/domain/PartnerId';
import { StockRecordPrice } from './StockRecordPrice';
import { StockRecordNumInStock } from './StockRecordNumInStock';
import { StockRecordNumAllocated } from './StockRecordNumAllocated';
import { StockRecordCreatedAt } from './StockRecordCreatedAt';
import { StockRecordModifiedAt } from './StockRecordModifiedAt';
import { StockRecordPriceCurrency } from './StockRecordPriceCurrency';
import { StockRecordLowStockThreshold } from './StockRecordLowStockThreshold';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { StockRecordId } from './StockRecordId';

export class StockRecord extends AggregateRoot {

    readonly id: StockRecordId;
    readonly product: ProductId;
    readonly partner: PartnerId;
    readonly price_currency: StockRecordPriceCurrency;
    readonly price: StockRecordPrice;
    readonly num_in_stock: StockRecordNumInStock;
    readonly num_allocated: StockRecordNumAllocated;
    readonly low_stock_threshold: StockRecordLowStockThreshold;
    readonly created_at: StockRecordCreatedAt;
    readonly modified_at: StockRecordModifiedAt;

    constructor(
        id: StockRecordId,
        product: ProductId,
        partner: PartnerId,
        price_currency: StockRecordPriceCurrency,
        price: StockRecordPrice,
        num_in_stock: StockRecordNumInStock,
        num_allocated: StockRecordNumAllocated,
        low_stock_threshold: StockRecordNumAllocated,
        created_at: StockRecordCreatedAt,
    ) {
        super();
        this.id = id;
        this.product = product;
        this.partner = partner;
        this.price_currency = price_currency;
        this.price = price;
        this.num_in_stock = num_in_stock;
        this.num_allocated = num_allocated;
        this.low_stock_threshold = low_stock_threshold;
        this.created_at = created_at;
    }

    static create(
        id: StockRecordId,
        product: ProductId,
        partner: PartnerId,
        price_currency: StockRecordPriceCurrency,
        price: StockRecordPrice,
        num_in_stock: StockRecordNumInStock,
        num_allocated: StockRecordNumAllocated,
        low_stock_threshold: StockRecordLowStockThreshold,
        created_at: StockRecordCreatedAt): StockRecord {

        return new StockRecord(
            id,
            product,
            partner,
            price_currency,
            price,
            num_in_stock,
            num_allocated,
            low_stock_threshold,
            created_at
        );
    }

    toPrimitives() {
        return {
            id: this.id.value,
            product: this.product.value,
            partner: this.partner.value,
            price_currency: this.price_currency.value,
            price: this.price.value,
            num_in_stock: this.num_in_stock.value,
            num_allocated: this.num_allocated.value,
            low_stock_threshold: this.low_stock_threshold.value,
            created_at: this.created_at.value,
        }
    }
}
