import { Paginate } from '../../../Shared/domain/Paginate';
import { BackofficeProductClass } from './ProductClass';

export interface ProductClassRepository {
    save(productClass: BackofficeProductClass): Promise<void>;

    paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeProductClass>>;
}