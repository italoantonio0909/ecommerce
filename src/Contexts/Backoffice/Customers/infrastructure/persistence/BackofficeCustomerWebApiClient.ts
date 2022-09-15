import { BackofficeCustomer } from '../../domain/BackofficeCustomer';
import { UserRecord } from 'firebase-admin/auth';
import { BackofficeCustomerRepository } from '../../domain/BackofficeCustomerRepository';
import { PaginateNextToken } from '../../../../Shared/domain/PaginateNextToken';
import { auth } from '../../../../../apps/Sales/database';

export interface BackofficeCustomerMappedAttr {
  email: string;
  displayName: string;
  disabled: boolean;
  emailVerified: boolean;
  uid: string;
  phoneNumber: string;
  photoURL: string;
}

export class BackofficeCustomerWebApiClient implements BackofficeCustomerRepository {

  customerMapAttr(customer: UserRecord) {
    return {
      email: customer.email,
      displayName: customer.displayName,
      disabled: customer.disabled,
      emailVerified: customer.emailVerified,
      uid: customer.uid,
      phoneNumber: customer.phoneNumber,
      photoURL: customer.photoURL
    }
  }

  async paginate(maxResults: number, token: string): Promise<PaginateNextToken<BackofficeCustomer>> {
    const { pageToken, users } = await auth.listUsers(maxResults, token);

    const customers = users.map((e) => this.customerMapAttr(e));

    return { nextPageToken: pageToken, results: [] }
  }

  async save(customer: BackofficeCustomer): Promise<void> {
    await auth.createUser({
      email: customer.email.value,
      password: customer.password.value,
      displayName: customer.displayName.value,
      phoneNumber: customer.phoneNumber.value
    })
  }
}
