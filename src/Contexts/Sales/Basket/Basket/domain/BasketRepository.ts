import { Product } from '../../../Catalogue/Product/domain/Product';

export interface BasketRepository {
    add_product(product: Product, quantity: number): Promise<any>;
}