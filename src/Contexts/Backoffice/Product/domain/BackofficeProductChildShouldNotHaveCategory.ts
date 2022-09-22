

export class BackofficeProductChildShouldNotHaveCategory extends Error {
    constructor() {
        super("You can only assign categories to parent products");
    }
}