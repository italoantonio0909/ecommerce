import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class CustomerPassword extends StringValueObject {

    constructor(value: string) {
        super(value);
        this.ensureValidFormat(value);
    }

    protected ensureValidFormat(value: string) {
        if (value.length < 6) {
            throw new InvalidArgumentError("The password provided must be a string with at least 6 characters")
        }
    }
}