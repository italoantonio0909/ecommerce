export class ProductChildNotMustProductClass extends Error {
    constructor() {
        super("Product child not must have a product class");
    }
}