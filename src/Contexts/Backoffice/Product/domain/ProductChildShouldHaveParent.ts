export class ProductChildShouldHaveParent extends Error {
    constructor() {
        super("Product child must have a parent");
    }
}