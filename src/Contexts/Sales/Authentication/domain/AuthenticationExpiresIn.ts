import { NumberValueObject } from '../../../Shared/domain/value-object/NumberValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class AuthenticationExpiresIn extends NumberValueObject {

    constructor(value: number) {
        super(value);
    }

    protected ensureFormatValid(value: number) {
        if (value > 60 * 60 * 24 * 5 * 1000) {
            throw new InvalidArgumentError("Authentication token expire invalid value");
        }
    }
}