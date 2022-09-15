import { CustomerEmail } from './CustomerEmail';
import { CustomerPassword } from './CustomerPassword';
import { CustomerDisplayName } from './CustomerDisplayName';
import { CustomerDisabled } from './CustomerDisabled';
import { CustomerEmailVerified } from './CustomerEmailVerified';
import { CustomerPhoneNumber } from './CustomerPhoneNumber';
import { CustomerPhotoURL } from './CustomerPhotoURL';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { CustomerSavedDomainEvent } from './CustomerSavedDomainEvent';
import { CustomerUid } from './CustomerUid';

export class Customer extends AggregateRoot {
  readonly uid: CustomerUid;
  readonly email: CustomerEmail;
  readonly phoneNumber: CustomerPhoneNumber;
  readonly emailVerified: CustomerEmailVerified;
  readonly password: CustomerPassword;
  readonly displayName: CustomerDisplayName;
  readonly photoURL: CustomerPhotoURL;
  readonly disabled: CustomerDisabled;

  constructor(email: CustomerEmail, password: CustomerPassword, displayName: CustomerDisplayName) {
    super();
    this.email = email;
    this.password = password;
    this.displayName = displayName;
  }

  static create(email: string, password: string, displayName: string): Customer {

    const customer = new Customer(
      new CustomerEmail(email),
      new CustomerPassword(password),
      new CustomerDisplayName(displayName)
    );

    customer.record(new CustomerSavedDomainEvent({ email }));

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
