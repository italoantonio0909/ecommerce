import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';

export class BackofficePostCategoryDescription extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

    protected ensureValidFormat(value: string): void {
        if (value.length > 200) {
            throw new InvalidArgumentError("Post category description cannot exceed 200 characters")
        }
    }
}