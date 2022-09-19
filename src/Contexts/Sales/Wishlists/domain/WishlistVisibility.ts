import { EnumValueObject } from '../../../Shared/domain/value-object/EnumValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export enum BasketStatus {
    PRIVATE = "private",
    PUBLIC = "public",
    SHARED = "shared",
}

export class WishlistVisibility extends EnumValueObject<BasketStatus> {
    constructor(value: BasketStatus) {
        super(value, Object.values(BasketStatus));
    }

    protected throwErrorForInvalidValue(value: BasketStatus): void {
        throw new InvalidArgumentError(`${value} is not a visibility valid.`);
    }
}