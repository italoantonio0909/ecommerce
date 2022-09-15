import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../../Shared/domain/value-object/StringValueObject';

export class BackofficeCategoryDescription extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureFormatValid(value);
    }

    protected ensureFormatValid(value: string) {
        if (value.length > 100) {
            throw new InvalidArgumentError("Descripción de categoría no puede superar los 100 caracteres")
        }
    }
}