import { Customer } from '../../Customers/domain/Customer';
import { BasketCreatedAt } from './BasketCreatedAt';
import { BasketMergedAt } from './BasketMergedAt';
import { BasketSubmittedAt } from './BasketSubmittedAt';
import { BasketStatus } from './BasketStatus';
import { BasketId } from './BasketId';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { BasketSavedDomainEvent } from './BasketSavedDomainEvent';

export class Basket extends AggregateRoot {
    id: BasketId;
    owner: Customer;
    status: BasketStatus;
    created_at: BasketCreatedAt;
    merged_at: BasketMergedAt;
    date_submitted: BasketSubmittedAt;

    constructor(id: BasketId, owner: Customer, status: BasketStatus, created_at: BasketCreatedAt) {
        super();
        this.id = id;
        this.owner = owner;
        this.status = status;
        this.created_at = created_at;
    }

    static create(id: BasketId, owner: Customer, status: BasketStatus, created_at: BasketCreatedAt): Basket {
        const basket = new Basket(id, owner, status, created_at);

        basket.record(new BasketSavedDomainEvent({ owner }));

        return basket;
    }

    toPrimitives() {
        return {
            id: this.id.value,
            owner: this.owner,
            created_at: this.created_at.value
        }
    }
}