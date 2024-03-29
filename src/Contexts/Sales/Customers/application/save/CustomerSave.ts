import { EventBus } from '../../../../Shared/domain/EventBus';
import { Customer } from '../../domain/Customer';
import { CustomerRepository } from '../../domain/CustomerRepository'
import { CustomerEmail } from '../../domain/CustomerEmail';
import { CustomerPassword } from '../../domain/CustomerPassword';
import { CustomerDisplayName } from '../../domain/CustomerDisplayName';
import { CustomerId } from '../../domain/CustomerId';

export class CustomerSave {
  constructor(private repository: CustomerRepository, private eventBus: EventBus) { }

  async run(id: CustomerId, email: CustomerEmail, password: CustomerPassword, displayName: CustomerDisplayName): Promise<any> {
    const customer = Customer.create(id, email, password, displayName);

    await this.repository.save(customer);
    await this.eventBus.publish(customer.pullDomainEvents());
  }
}
