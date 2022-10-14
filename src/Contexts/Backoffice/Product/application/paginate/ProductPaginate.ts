import { Paginate } from '../../../Shared/domain/Paginate';
import { ProductRepository } from '../../domain/ProductRepository';
import { Product } from '../../domain/Product';

export class ProductPaginate {
    constructor(private repository: ProductRepository) { }

    async paginate(limit: number, startAfter: number): Promise<Paginate<Product>> {
        return await this.repository.paginate(limit, startAfter)
    }
}