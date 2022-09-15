import { auth } from '../../../../../apps/Sales/database';
import { Customer } from '../../domain/Customer';
import { CustomerRepository } from '../../domain/CustomerRepository'

export class CustomerWebApiClient implements CustomerRepository {

  constructor() { }

  async save(customer: Customer): Promise<any> {

    const data = {
      email: customer.email.value,
      displayName: customer.displayName.value,
      password: customer.password.value,
    }

    return await auth.createUser(data);
  }
}
