export class CategoryAlreadyExists extends Error {
    constructor(name: string) {
        super(`Category ${name} already in use.`);
    }
}