export class BackofficeProductChildShouldHaveParent extends Error {
    constructor() {
        super("Product child must have a parent");
    }
}