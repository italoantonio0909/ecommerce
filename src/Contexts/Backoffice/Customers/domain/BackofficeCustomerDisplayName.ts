import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class BackofficeCustomerDisplayName extends StringValueObject {

    constructor(value: string) {
        super(value);
        this.ensureValidFormat(value);
    }

    protected ensureValidFormat(value: string) {
        if (value.includes("@")) {
            throw new InvalidArgumentError("The display name provided is improperly formated.")
        }
    }
}