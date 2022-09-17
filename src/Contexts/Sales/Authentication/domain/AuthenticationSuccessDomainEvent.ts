import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type AuthenticationSucessDomainEventBody = {
    email: string;
    eventName: string;
}

export class AuthenticationSucessDomainEvent extends DomainEvent {
    static eventName = 'authentication.success';
    occurredOn: Date;
    email: string;

    constructor({ occurredOn, email }: { occurredOn?: Date, email: string }) {
        super(AuthenticationSucessDomainEvent.EVENT_NAME, occurredOn);
        this.email = email;
    }

    toPrimitive(): AuthenticationSucessDomainEventBody {
        return {
            email: this.email,
            eventName: AuthenticationSucessDomainEvent.EVENT_NAME
        }
    }

    fromPrimitives(body: AuthenticationSucessDomainEventBody, ocurredOn: Date): DomainEvent {
        return new AuthenticationSucessDomainEvent({
            email: body.email,
            occurredOn: ocurredOn
        })
    }
}