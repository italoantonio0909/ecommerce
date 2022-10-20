import { ProductRepository } from '../../domain/ProductRepository';
import { Product } from '../../domain/Product';

export class ProductRetrieveDetail {
    constructor(private repository: ProductRepository) { }

    async retrieveDetail(uid: string): Promise<Product> {
        return await this.repository.retrieveDetail(uid)
    }
}