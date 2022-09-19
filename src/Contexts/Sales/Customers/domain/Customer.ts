import { CustomerEmail } from './CustomerEmail';
import { CustomerPassword } from './CustomerPassword';
import { CustomerDisplayName } from './CustomerDisplayName';
import { CustomerDisabled } from './CustomerDisabled';
import { CustomerEmailVerified } from './CustomerEmailVerified';
import { CustomerPhoneNumber } from './CustomerPhoneNumber';
import { CustomerPhotoURL } from './CustomerPhotoURL';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CustomerSavedDomainEvent } from './CustomerSavedDomainEvent';
import { CustomerId } from './CustomerId';

export class Customer extends AggregateRoot {
  readonly id: CustomerId;
  readonly email: CustomerEmail;
  readonly phoneNumber: CustomerPhoneNumber;
  readonly emailVerified: CustomerEmailVerified;
  readonly password: CustomerPassword;
  readonly displayName: CustomerDisplayName;
  readonly photoURL: CustomerPhotoURL;
  readonly disabled: CustomerDisabled;

  constructor(id: CustomerId, email: CustomerEmail, password: CustomerPassword, displayName: CustomerDisplayName) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.displayName = displayName;
  }

  static create(id: CustomerId, email: CustomerEmail, password: CustomerPassword, displayName: CustomerDisplayName): Customer {

    const customer = new Customer(id, email, password, displayName);

    customer.record(new CustomerSavedDomainEvent({ email: email.value }));

    return customer;
  }

  toPrimitives() {
    return {
      email: this.email.value,
      password: this.password.value,
      displayName: this.displayName.value
    }
  }
}
