
export class BackofficePostCategoryAlreadyExist extends Error {
    constructor(title: string) {
        super(`Category of post with ${title} already exist`)
    }
}