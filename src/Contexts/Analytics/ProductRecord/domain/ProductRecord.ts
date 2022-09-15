import { Product } from "../../../Sales/Catalogue/Product/domain/Product";
import { ProductRecordNumViews } from './ProductRecordNumViews';
import { ProductRecordNumBasketAdditions } from './ProductRecordNumBasketAdditions';
import { ProductRecordNumPurchases } from './ProductRecordNumPurchases';
import { ProductRecordScore } from './ProductRecordScore';

export class ProductRecord {
    product: Product;
    num_views: ProductRecordNumViews;
    num_basket_additions: ProductRecordNumBasketAdditions;
    num_purchases: ProductRecordNumPurchases;
    score: ProductRecordScore;
}