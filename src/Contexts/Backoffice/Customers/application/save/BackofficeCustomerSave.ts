import { BackofficeCustomer } from '../../domain/BackofficeCustomer';
import { BackofficeCustomerRepository } from '../../domain/BackofficeCustomerRepository';

export class BackofficeCustomerSave {
  constructor(
    private repository: BackofficeCustomerRepository
  ) { }

  async save(email: string, password: string, phoneNumber: string, displayName: string): Promise<void> {
    const customer = BackofficeCustomer.create(email, phoneNumber, password, displayName);

    return await this.repository.save(customer);
  }
}
