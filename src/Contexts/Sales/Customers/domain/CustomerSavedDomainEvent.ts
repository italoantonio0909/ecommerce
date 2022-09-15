import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type CustomerSavedDomainEventBody = {
    readonly eventName: string;
    readonly email: string;
};

export class CustomerSavedDomainEvent extends DomainEvent {
    static readonly EVENT_NAME = "customer.saved";
    readonly email: string;

    constructor({ email }: { email: string; }) {
        super(CustomerSavedDomainEvent.EVENT_NAME);

        email = this.email;
    }

    toPrimitive(): CustomerSavedDomainEventBody {
        return {
            eventName: CustomerSavedDomainEvent.EVENT_NAME,
            email: this.email,
        }
    }

    static fromPrimitives(
        body: CustomerSavedDomainEventBody,
    ): DomainEvent {
        return new CustomerSavedDomainEvent({
            email: body.email
        });
    }
}