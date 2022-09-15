import { BackofficeSubscribersCounterTotal } from './BackofficeSubscribersCounterTotal';
import { Subscriber } from '../../../Sales/Subscribers/domain/Subscriber';

export class BackofficeSubscribersCounter {
    readonly id: string;
    readonly _total: BackofficeSubscribersCounterTotal;
    readonly subscribers: Array<Subscriber>;

    constructor(_total: BackofficeSubscribersCounterTotal, subscribers?: Array<Subscriber>) {
        this._total = _total;
        this.subscribers = subscribers || [];
    }

    public total(): BackofficeSubscribersCounterTotal {
        return this._total;
    }

    static initialize(id: string): BackofficeSubscribersCounter {
        return new BackofficeSubscribersCounter(BackofficeSubscribersCounterTotal.initialize());
    }

}