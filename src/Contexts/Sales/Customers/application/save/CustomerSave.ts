import { EventBus } from '../../../../Shared/domain/EventBus';
import { Customer } from '../../domain/Customer';
import { CustomerRepository } from '../../domain/CustomerRepository'

export class CustomerSave {
  constructor(private repository: CustomerRepository, private eventBus: EventBus) { }

  async save(email: string, password: string, displayName: string): Promise<any> {
    const customer = Customer.create(email, password, displayName);

    await this.repository.save(customer);
    await this.eventBus.publish(customer.pullDomainEvents());
  }
}
