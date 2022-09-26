export class ProductShouldNotHaveParent extends Error {
    constructor() {
        super("Only products child must have a parent");
    }
}