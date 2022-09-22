import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';

export class BackofficeProductMetaDescription extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

    protected ensureFormatValid(value: string): void {
        if (value.length > 20) {
            throw new InvalidArgumentError("Meta description exceed 20 characters")
        }
    }
}