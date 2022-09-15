import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';

export class SubscriberEmail extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureEmailFormat(value);
    }

    private ensureEmailFormat(value: string): void {
        if (!value.includes("@")) {
            throw new InvalidArgumentError("Email does not contain an adequate format.")
        }
    }
}