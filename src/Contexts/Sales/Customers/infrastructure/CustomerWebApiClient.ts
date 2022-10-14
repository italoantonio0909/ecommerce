import { auth } from '../../../../apps/Sales/database';
import { Customer } from '../domain/Customer';
import { CustomerRepository } from '../domain/CustomerRepository'

export class CustomerWebApiClient implements CustomerRepository {

  constructor() { }

  async save(customer: Customer): Promise<any> {

    const user = {
      email: customer.email.value,
      displayName: customer.displayName.value,
      password: customer.password.value,
      uid: customer.id.value
    }

    return await auth.createUser(user);
  }
}
