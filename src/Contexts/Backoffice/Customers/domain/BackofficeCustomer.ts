import { BackofficeCustomerEmail } from './BackofficeCustomerEmail';
import { BackofficeCustomerEmailVerified } from './BackofficeCustomerEmailVerified';
import { BackofficeCustomerDisabled } from './BackofficeCustomerDisabled';
import { BackofficeCustomerPhotoURL } from './BackofficeCustomerPhotoURL';
import { BackofficeCustomerDisplayName } from './BackofficeCustomerDisplayName';
import { BackofficeCustomerPassword } from './BackofficeCustomerPassword';
import { BackofficeCustomerPhoneNumber } from './BackofficeCustomerPhoneNumber';

export class BackofficeCustomer {
  readonly email: BackofficeCustomerEmail;
  readonly phoneNumber: BackofficeCustomerPhoneNumber;
  readonly emailVerified: BackofficeCustomerEmailVerified;
  readonly password: BackofficeCustomerPassword;
  readonly displayName: BackofficeCustomerDisplayName;
  readonly photoURL: BackofficeCustomerPhotoURL;
  readonly disabled: BackofficeCustomerDisabled;

  constructor(email: BackofficeCustomerEmail, phoneNumber: BackofficeCustomerPhoneNumber, password: BackofficeCustomerPassword, displayName: BackofficeCustomerDisplayName) {
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.displayName = displayName;
  }

  static create(email: string, phoneNumber: string, password: string, displayName: string): BackofficeCustomer {
    return new BackofficeCustomer(
      new BackofficeCustomerEmail(email),
      new BackofficeCustomerPhoneNumber(phoneNumber),
      new BackofficeCustomerPassword(password),
      new BackofficeCustomerDisplayName(displayName)
    );
  }
}