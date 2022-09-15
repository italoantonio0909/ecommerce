import { PaginateNextToken } from '../../../../Shared/domain/PaginateNextToken';
import { BackofficeCustomer } from '../../domain/BackofficeCustomer';
import { BackofficeCustomerRepository } from '../../domain/BackofficeCustomerRepository';

export class BackofficeCustomerPaginate {
  constructor(
    private repository: BackofficeCustomerRepository
  ) { }

  async paginate(limitOfDocuments: number, pageToken: string): Promise<PaginateNextToken<BackofficeCustomer>> {
    return await this.repository.paginate(limitOfDocuments, pageToken);
  }
}
