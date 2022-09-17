import { NumberValueObject } from '../../../Shared/domain/value-object/NumberValueObject';

export class CustomersCounterTotal extends NumberValueObject {
    increment(): CustomersCounterTotal {
        return new CustomersCounterTotal(this.value + 1);
    }

    static initialize(): CustomersCounterTotal {
        return new CustomersCounterTotal(0);
    }
}