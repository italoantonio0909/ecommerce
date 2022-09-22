export class BackofficeCategoryAlreadyExists extends Error {
    constructor(name: string) {
        super(`El nombre ${name} de categoría ya existe`);
    }
}