import { Paginate } from '../../../Shared/domain/Paginate';

export interface ProductRepository {
  paginate(limit: number, startAfter: number): Promise<Paginate<BackofficeProduct>>

  create(product: BackofficeProduct): Promise<void>

  retrieveDetail(uid: string): Promise<BackofficeProduct>

  update(uid: string, product: Partial<BackofficeProduct>): Promise<any>;
}
