import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';

export class BackofficeProductMetaTitle extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

    protected ensureFormatValid(value: string): void {
        if (value.length > 20) {
            throw new InvalidArgumentError("Meta title exceed 20 characters")
        }
    }
}