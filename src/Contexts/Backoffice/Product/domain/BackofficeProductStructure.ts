import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { EnumValueObject } from '../../../Shared/domain/value-object/EnumValueObject';

export enum ProductStructure {
    STANDALONE = "standalone",
    PARENT = "parent",
    CHILD = "child",
}

export class BackofficeProductStructure extends EnumValueObject<ProductStructure> {
    constructor(value: ProductStructure) {
        super(value, Object.values(ProductStructure));
    }

    protected throwErrorForInvalidValue(value: ProductStructure): void {
        throw new InvalidArgumentError(`${value} is not a structure valid product`);
    }
}