import { DomainEvent } from '../../../Shared/domain/DomainEvent';
import { Customer } from '../../Customers/domain/Customer';

type BasketSavedDomainEventBody = {
    readonly eventName: string;
    readonly owner: Customer;
};

export class BasketSavedDomainEvent extends DomainEvent {
    static readonly eventName = 'basket.save';
    readonly occurredOn: Date;
    readonly owner: Customer;

    constructor({ occurredOn, owner }: { occurredOn?: Date; owner: Customer }) {
        super(BasketSavedDomainEvent.EVENT_NAME, occurredOn);

        this.occurredOn = occurredOn;
        this.owner = owner;
    }

    toPrimitive(): BasketSavedDomainEventBody {
        return {
            eventName: BasketSavedDomainEvent.EVENT_NAME,
            owner: this.owner
        }
    }

    static fromPrimitives(
        body: BasketSavedDomainEventBody,
        ocurredOn: Date
    ): DomainEvent {
        return new BasketSavedDomainEvent({
            occurredOn: ocurredOn,
            owner: body.owner
        });
    }
}