import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { EnumValueObject } from '../../../Shared/domain/value-object/EnumValueObject';

export enum BasketStatus {
    OPEN = "open",
    MERGED = "merged",
    SAVED = "saved",
    FROZEN = "frozen",
    SUBMITTED = "submited"
}

export class BackofficeProductStructure extends EnumValueObject<BasketStatus> {
    constructor(value: BasketStatus) {
        super(value, Object.values(BasketStatus));
    }

    protected throwErrorForInvalidValue(value: BasketStatus): void {
        throw new InvalidArgumentError(`${value} is not a status valid basket`);
    }
}