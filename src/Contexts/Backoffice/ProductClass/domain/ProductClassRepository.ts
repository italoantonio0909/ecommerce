<<<<<<< HEAD
import { Paginate } from '../../Shared/domain/Paginate';
=======
import { Paginate } from '../../../Shared/domain/Paginate';
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
import { ProductClass } from './ProductClass';

export interface ProductClassRepository {
    save(productClass: ProductClass): Promise<void>;

    paginate(limitOfDocuments: number, page: number): Promise<Paginate<ProductClass>>;
}