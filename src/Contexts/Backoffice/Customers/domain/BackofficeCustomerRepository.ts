import { BackofficeCustomer } from './BackofficeCustomer';
import { PaginateNextToken } from '../../../Shared/domain/PaginateNextToken';

export interface BackofficeCustomerRepository {
  paginate(limitOfDocuments: number, pageToken: string): Promise<PaginateNextToken<BackofficeCustomer>>;
  save(customer: BackofficeCustomer): Promise<void>;
}
