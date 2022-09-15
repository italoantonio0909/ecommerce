import { BackofficeSubscriberEmail } from './BackofficeSubscriberEmail';
import { BackofficeSubscriberId } from './BackofficeSubscriberId';
import { BackofficeSubscriberCreatedAt } from './BackofficeSubscriberCreatedAt';
import { BackofficeSubscriberModifiedAt } from './BackofficeSubscriberModifiedAt';
import { BackofficeSubscriberStatus } from './BackofficeSubscriberStatus';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class BackofficeSubscriber extends AggregateRoot {
  readonly id: BackofficeSubscriberId;
  readonly email: BackofficeSubscriberEmail;
  readonly created_at: BackofficeSubscriberCreatedAt;
  readonly modified_at: BackofficeSubscriberModifiedAt;
  readonly status: BackofficeSubscriberStatus;

  constructor(email: BackofficeSubscriberEmail, status: BackofficeSubscriberStatus, created_at: BackofficeSubscriberCreatedAt) {
    super();
    this.email = email;
    this.created_at = created_at;
    this.status = status;
  }

  static create(email: string, status: boolean, created_at: number): BackofficeSubscriber {
    return new BackofficeSubscriber(
      new BackofficeSubscriberEmail(email),
      new BackofficeSubscriberStatus(status),
      new BackofficeSubscriberCreatedAt(created_at)
    );
  }

  toPrimitives() {
    return {
      email: this.email.value,
      status: this.status.value,
      created_at: this.created_at.value
    }
  }
}