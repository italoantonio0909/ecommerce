import { Paginate } from '../../../Shared/domain/Paginate';
import { Product } from './Product';

export interface ProductRepository {
  paginate(limit: number, startAfter: number): Promise<Paginate<Product>>;
  save(product: Product): Promise<void>;
  retrieveDetail(uid: string): Promise<Product>;
}
