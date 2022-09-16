import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type CustomerSavedEventBody = {
    eventName: string;
    email: string;
}

export class CustomerSavedDomainEvent extends DomainEvent {

    readonly email: string;
    readonly occurredOn: Date;
    static EVENT_NAME = 'customer.saved';

    constructor({ email }: { email: string, occurredOn?: Date; }) {
        super(CustomerSavedDomainEvent.EVENT_NAME);

        this.email = email;
    }

    toPrimitive(): CustomerSavedEventBody {
        return {
            eventName: CustomerSavedDomainEvent.EVENT_NAME,
            email: this.email,
        }
    }

    static fromPrimitives(
        body: CustomerSavedEventBody,
        ocurredOn: Date
    ): DomainEvent {
        return new CustomerSavedDomainEvent({
            email: body.email,
            occurredOn: ocurredOn
        })
    }
}