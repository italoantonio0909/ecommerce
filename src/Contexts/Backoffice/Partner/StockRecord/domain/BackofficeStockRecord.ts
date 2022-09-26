import { BackofficePartner } from "../../Partner/domain/BackofficePartner";
import { BackofficeProduct } from '../../../Product/domain/Product';
import { BackofficeStockRecordPrice } from './BackofficeStockRecordPrice';
import { BackofficeStockRecordCreatedAt } from './BackofficeStockRecordCreatedAt';
import { BackofficeStockRecordModifiedAt } from './BackofficeStockRecordModifiedAt';
import { BackofficeStockRecordLowStockThreshold } from './BackofficeStockRecordLowStockThreshold';
import { BackofficeStockRecordNumInStock } from './BackofficeStockRecordNumInStock';
import { BackofficeStockRecordNumAllocated } from './BackofficeStockRecordNumAllocated';

export class BackofficeStockRecord {
    readonly product: BackofficeProduct;
    readonly partner: BackofficePartner;
    readonly price_currency: string;
    readonly price: BackofficeStockRecordPrice;
    readonly num_in_stock: BackofficeStockRecordNumInStock;
    readonly num_allocated: BackofficeStockRecordNumAllocated;
    readonly low_stock_threshold: BackofficeStockRecordLowStockThreshold;
    readonly modified_at: BackofficeStockRecordModifiedAt;
    readonly created_at: BackofficeStockRecordCreatedAt;

    constructor(
        product: BackofficeProduct,
        partner: BackofficePartner,
        price_currency: string,
        price: BackofficeStockRecordPrice,
        num_in_stock: BackofficeStockRecordNumInStock,
        num_allocated: BackofficeStockRecordNumAllocated,
        low_stock_threshold: BackofficeStockRecordLowStockThreshold,
        created_at: BackofficeStockRecordCreatedAt,
    ) {
        this.product = product;
        this.partner = partner;
        this.price_currency = price_currency;
        this.price = price;
        this.num_in_stock = num_in_stock;
        this.num_allocated = num_allocated;
        this.low_stock_threshold = low_stock_threshold;
        this.created_at = created_at;
    }

    static create(product: BackofficeProduct, partner: BackofficePartner, price_currency: string, price: number, num_in_stock: number, num_allocated: number, low_stock_threshold: number, created_at: number): BackofficeStockRecord {
        return new BackofficeStockRecord(
            product,
            partner,
            price_currency,
            new BackofficeStockRecordPrice(price),
            new BackofficeStockRecordNumInStock(num_in_stock),
            new BackofficeStockRecordNumAllocated(num_allocated),
            new BackofficeStockRecordLowStockThreshold(low_stock_threshold),
            new BackofficeStockRecordCreatedAt(created_at)
        );
    }
}
