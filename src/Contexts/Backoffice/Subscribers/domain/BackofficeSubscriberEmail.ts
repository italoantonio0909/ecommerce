import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';

export class BackofficeSubscriberEmail extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureEmailFormat(value);
    }

    private ensureEmailFormat(value: string): void {
        if (!value.includes("@")) {
            throw new InvalidArgumentError("Dirección electrónica no contiene un formato adecuado")
        }
    }
}