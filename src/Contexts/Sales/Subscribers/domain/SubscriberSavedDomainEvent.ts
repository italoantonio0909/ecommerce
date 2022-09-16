import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type SubscriberSavedDomainEventBody = {
    readonly eventName: string;
    readonly email: string;
};

export class SubscriberSavedDomainEvent extends DomainEvent {
    static readonly EVENT_NAME = 'subscriber.save';

    readonly email: string;
    readonly occurredOn: Date;

    constructor({ occurredOn, email }: { occurredOn?: Date; email: string; }) {
        super(SubscriberSavedDomainEvent.EVENT_NAME, occurredOn);

        this.email = email;
        this.occurredOn = occurredOn;
    }

    toPrimitive(): SubscriberSavedDomainEventBody {
        return {
            eventName: SubscriberSavedDomainEvent.EVENT_NAME,
            email: this.email,
        }
    }

    static fromPrimitives(
        body: SubscriberSavedDomainEventBody,
        ocurredOn: Date
    ): DomainEvent {
        return new SubscriberSavedDomainEvent({
            occurredOn: ocurredOn,
            email: body.email
        });
    }


}