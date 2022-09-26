

export class ProductChildShouldNotHaveCategory extends Error {
    constructor() {
        super("You can only assign categories to parent products");
    }
}