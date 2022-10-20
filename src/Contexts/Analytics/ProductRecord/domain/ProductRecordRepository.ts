import { ProductRecord } from './ProductRecord';
import { Paginate } from '../../../Backoffice/Shared/domain/Paginate';

export interface ProductRecordRepository {
    productRecordCreate(productRecord: ProductRecordRepository): Promise<Paginate<ProductRecord>>;

    productRecordPaginate(limit: number, startAfter: number): Promise<ProductRecord>;
}