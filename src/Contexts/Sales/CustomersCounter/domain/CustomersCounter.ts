import { Customer } from '../../Customers/domain/Customer';
import { CustomersCounterTotal } from './CustomersCounterTotal';

export class CustomersCounter {
    readonly id: string;
    readonly _total: CustomersCounterTotal;
    readonly customers: Array<Customer>;

    constructor(_total: CustomersCounterTotal, customers?: Array<Customer>) {
        this._total = _total;
        this.customers = customers || [];
    }

    public total(): CustomersCounterTotal {
        return this._total;
    }

    static initialize(id: string): CustomersCounter {
        return new CustomersCounter(CustomersCounterTotal.initialize());
    }

}