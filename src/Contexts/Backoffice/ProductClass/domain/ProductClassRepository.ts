import { Paginate } from '../../../Shared/domain/Paginate';
import { ProductClass } from './ProductClass';

export interface ProductClassRepository {
    save(productClass: ProductClass): Promise<void>;

    paginate(limitOfDocuments: number, page: number): Promise<Paginate<ProductClass>>;
}