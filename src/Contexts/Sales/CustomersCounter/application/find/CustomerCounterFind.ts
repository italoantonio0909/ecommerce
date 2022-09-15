import { CustomerCounterRepository } from '../../domain/CustomerCounterRepository';
import { CustomerCounterNotExist } from '../../domain/CustomerCounterNotExist';
import { FindCustomerCounterResponse } from './CustomerCounterResponse';

export class CustomerCounterFind {
    constructor(
        private repository: CustomerCounterRepository
    ) { }

    async find() {
        const counter = await this.repository.search();
        if (!counter) {
            throw new CustomerCounterNotExist();
        }

        return new FindCustomerCounterResponse(counter.total().value);
    }
}