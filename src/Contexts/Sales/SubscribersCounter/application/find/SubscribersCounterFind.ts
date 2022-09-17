import { SubscribersCounterRepository } from '../../domain/SubscribersCounterRepository';
import { SubscribersCounterNotExist } from '../../domain/SubscribersCounterNotExist';
import { FindSubscribersCounterResponse } from './FindSubscribersCounterResponse';

export class SubscribersCounterFind {
    constructor(
        private repository: SubscribersCounterRepository
    ) { }

    async find() {
        const counter = await this.repository.search();
        if (!counter) {
            throw new SubscribersCounterNotExist();
        }

        return new FindSubscribersCounterResponse(counter.total().value);
    }
}