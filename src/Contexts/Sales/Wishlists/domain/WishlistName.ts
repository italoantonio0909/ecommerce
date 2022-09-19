import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class WishlistName extends StringValueObject {
    value: string;

    constructor(value: string) {
        super(value);
        this.ensureValidFormat(value);
        this.value;
    }

    protected ensureValidFormat(value: string) {
        if (value.length > 50) {
            throw new InvalidArgumentError("Wislist very long name")
        }
    }
}