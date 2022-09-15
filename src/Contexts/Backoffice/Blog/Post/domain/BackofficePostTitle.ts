import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';

export class BackofficePostTitle extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureValidFormat(value);
    }

    protected ensureValidFormat(value: string): void {
        if (value.length > 50) {
            throw new InvalidArgumentError("Post title cannot exceed 20 characters")
        }
    }
}