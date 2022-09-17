import { SubscribersCounterRepository } from '../../domain/SubscribersCounterRepository';
import { SubscribersCounter } from '../../domain/SubscribersCounter';
import { SubscriberId } from '../../../Subscribers/domain/SubscriberId';

export class CustomerCounterIncrement {
    constructor(private repository: SubscribersCounterRepository) { }

    async increment() {
        const counter = (await this.repository.search()) || this.initializeCounter();

        await this.repository.save(counter);
    }

    private initializeCounter(): SubscribersCounter {
        return SubscribersCounter.initialize(new SubscriberId(""));
    }
}