export class ProductTitleRequired extends Error {
    constructor() {
        super("Product must have a title");
    }
}