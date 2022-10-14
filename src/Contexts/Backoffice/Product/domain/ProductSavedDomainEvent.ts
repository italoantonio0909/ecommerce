import { DomainEvent } from '../../../Shared/domain/DomainEvent';

type ProductSavedDomainEventBody = {
    readonly eventName: string;
    readonly id: string;
};

export class ProductSavedDomainEvent extends DomainEvent {
    static readonly EVENT_NAME = 'product.saved';
    occurredOn: Date;
    id: string;

    constructor({ id, occurredOn }: { occurredOn?: Date, id: string }) {
        super(ProductSavedDomainEvent.EVENT_NAME, occurredOn);

        this.id = id;
        this.occurredOn = occurredOn;
    }

    toPrimitive(): ProductSavedDomainEventBody {
        return {
            eventName: ProductSavedDomainEvent.EVENT_NAME,
            id: this.id
        }
    }

    static fromPrimitives(
        body: ProductSavedDomainEventBody,
        occurredOn: Date
    ): DomainEvent {
        return new ProductSavedDomainEvent({
            id: body.id,
            occurredOn: occurredOn
        })
    }

}