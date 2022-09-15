import { InvalidArgumentError } from "../../../../Shared/domain/value-object/InvalidArgumentError";
import { StringValueObject } from "../../../../Shared/domain/value-object/StringValueObject";

export class BackofficePostCategoryTitle extends StringValueObject {
    constructor(value: string) {
        super(value);
    }

    protected ensureValidFormat(value: string): void {
        if (value.length > 20) {
            throw new InvalidArgumentError("Post category cannot exceed 20 characters")
        }
    }
}