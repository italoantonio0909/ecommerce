import { CustomersCounter } from './CustomersCounter';

export interface CustomerCounterRepository {
    search(): Promise<CustomersCounter>;

    save(counter: CustomersCounter): Promise<void>;
}