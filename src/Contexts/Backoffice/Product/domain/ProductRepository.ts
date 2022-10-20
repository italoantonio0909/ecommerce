<<<<<<< HEAD
import { Product } from './Product';

export interface ProductRepository {
  save(product: Product): Promise<void>;
=======
import { Paginate } from '../../../Shared/domain/Paginate';
import { Product } from './Product';

export interface ProductRepository {
  paginate(limit: number, startAfter: number): Promise<Paginate<Product>>;
  save(product: Product): Promise<void>;
  retrieveDetail(uid: string): Promise<Product>;
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
}
