import { BackofficeStockRecord } from '../../../../Backoffice/Partner/StockRecord/domain/BackofficeStockRecord';
import { Product } from '../../../Catalogue/Product/domain/Product';
import { Basket } from '../../Basket/domain/Basket';

export class BasketLine {
    basket: Basket;
    stockrecord: BackofficeStockRecord;
    product: Product;
    quantity: number;
    price_currency: number;
    price_excl_tax: number;
    price_incl_tax: number;
    created_at: number;
    modified_at: number;
}