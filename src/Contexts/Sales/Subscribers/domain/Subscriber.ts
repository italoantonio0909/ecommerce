import { SubscriberEmail } from './SubscriberEmail';
import { SubscriberCreatedAt } from './SubscriberCreatedAt';
import { SubscriberModifiedAt } from './SubscriberModifiedAt';
import { SubscriberStatus } from './SubscriberStatus';
import { SubscriberId } from './SubscriberId';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { SubscriberSavedDomainEvent } from './SubscriberSavedDomainEvent';

export class Subscriber extends AggregateRoot {
  readonly id: SubscriberId;
  readonly email: SubscriberEmail;
  readonly status: SubscriberStatus;
  readonly created_at: SubscriberCreatedAt;
  readonly modified_at: SubscriberModifiedAt;

  constructor(email: SubscriberEmail, status: SubscriberStatus, created_at: SubscriberCreatedAt) {
    super();
    this.email = email;
    this.status = status;
    this.created_at = created_at;
  }

  static create(email: SubscriberEmail, status: SubscriberStatus, created_at: SubscriberCreatedAt): Subscriber {
    const subscriber = new Subscriber(email, status, created_at);

    subscriber.record(
      new SubscriberSavedDomainEvent({ email: subscriber.email.value })
    );

    return subscriber;
  }

  static fromPrimitives(email: string, status: boolean, created_at: number): Subscriber {
    return new Subscriber(
      new SubscriberEmail(email),
      new SubscriberStatus(status),
      new SubscriberCreatedAt(created_at));
  }

  toPrimitives() {
    return {
      email: this.email.value,
      status: this.status.value,
      created_at: this.created_at.value
    }
  }
}