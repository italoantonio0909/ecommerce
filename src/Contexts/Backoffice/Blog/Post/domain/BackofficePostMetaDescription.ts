import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';

export class BackofficePostMetaDescription extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureValidFormat(value);
    }

    protected ensureValidFormat(value: string): void {
        if (value.length > 100) {
            throw new InvalidArgumentError("Post meta description cannot exceed 100 characters")
        }
    }
}