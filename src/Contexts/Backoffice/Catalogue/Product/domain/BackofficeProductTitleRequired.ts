export class BackofficeProductTitleRequired extends Error {
    constructor() {
        super("Product must have a title");
    }
}