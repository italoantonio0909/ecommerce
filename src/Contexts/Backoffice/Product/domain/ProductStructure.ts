import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { EnumValueObject } from '../../../Shared/domain/value-object/EnumValueObject';

export enum Structure {
    STANDALONE = "standalone",
    PARENT = "parent",
    CHILD = "child",
}

export class ProductStructure extends EnumValueObject<Structure> {
    constructor(value: Structure) {
        super(value, Object.values(Structure));
    }

    protected throwErrorForInvalidValue(value: Structure): void {
        throw new InvalidArgumentError(`${value} is not a structure valid product.`);
    }
}