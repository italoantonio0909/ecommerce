import { CustomerCounterRepository } from "../../domain/CustomerCounterRepository";
import { CustomersCounter } from '../../domain/CustomersCounter';

export class CustomerCounterIncrement {
    constructor(
        private repository: CustomerCounterRepository
    ) { }

    async increment() {
        const counter = (await this.repository.search()) || this.initializeCounter();

        await this.repository.save(counter);
    }

    private initializeCounter(): CustomersCounter {
        return CustomersCounter.initialize("1212");
    }
}