export class ProductChildShouldNotHaveParent extends Error {
    constructor() {
        super("You can only assign child products to parent products");
    }
}