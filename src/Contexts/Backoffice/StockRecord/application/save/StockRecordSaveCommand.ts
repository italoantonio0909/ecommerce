import { Command } from '../../../../Shared/domain/Command';

type Params = {
    id: string;
    product: string;
    partner: string;
    price_currency: string;
    price: number;
    num_in_stock: number;
    num_allocated: number;
    low_stock_threshold: number;
    created_at: Date;
}

export class StockRecordSaveCommand extends Command {

    id: string;
    product: string;
    partner: string;
    price_currency: string;
    price: number;
    num_in_stock: number;
    num_allocated: number;
    low_stock_threshold: number;
    created_at: Date;

    constructor({ id, product, partner, price_currency, price, num_in_stock, num_allocated, low_stock_threshold, created_at }: Params) {
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
}