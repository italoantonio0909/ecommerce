import { CustomersCounterTotal } from './SubscribersCounterTotal';
import { Subscriber } from '../../Subscribers/domain/Subscriber';
import { SubscriberId } from '../../Subscribers/domain/SubscriberId';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class SubscribersCounter extends AggregateRoot {
    readonly id: SubscriberId;
    private _total: CustomersCounterTotal;
    readonly subscribers: Array<SubscriberId>;

    constructor(id: SubscriberId, _total: CustomersCounterTotal, subscribers?: Array<SubscriberId>) {
        super();
        this.id = id;
        this._total = _total;
        this.subscribers = subscribers || [];
    }

    public get total(): CustomersCounterTotal {
        return this._total;
    }

    static initialize(id: SubscriberId): SubscribersCounter {
        return new SubscribersCounter(id, CustomersCounterTotal.initialize());
    }

    increment(subscriberId: SubscriberId) {
        this._total = this.total.increment();
        this.subscribers.push(subscriberId);
    }

    // hasIncremented(subscriberId: SubscriberId): boolean {
    //     const exists = this.subscribers.find(entry => entry.value === subscriberId.value);
    //     return exists !== undefined;
    // }

    toPrimitives() {
        return {
            id: this.id.value,
            total: this.total.value,
            existingCourses: this.subscribers.map(subscriberId => subscriberId.value)
        };
    }

}