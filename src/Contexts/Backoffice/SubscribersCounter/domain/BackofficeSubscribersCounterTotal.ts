import { NumberValueObject } from "../../../Shared/domain/value-object/NumberValueObject";

export class BackofficeSubscribersCounterTotal extends NumberValueObject {
    increment(): BackofficeSubscribersCounterTotal {
        return new BackofficeSubscribersCounterTotal(this.value + 1);
    }

    static initialize(): BackofficeSubscribersCounterTotal {
        return new BackofficeSubscribersCounterTotal(0);
    }
}