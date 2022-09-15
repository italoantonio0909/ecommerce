import { BackofficePostCategoryRepository } from '../../domain/BackofficePostCategoryRepository';
import { BackofficePostCategory } from '../../domain/BackofficePostCategory';
import { BackofficePostCategoryAlreadyExist } from '../../domain/BackofficePostCategoryAlreadyExist';

export class BackofficePostCategorySave {
    constructor(
        private repository: BackofficePostCategoryRepository
    ) { }

    async save(title: string, description: string): Promise<void> {
        const exist = await this.repository.find(title.trim());

        if (exist !== null) {
            throw new BackofficePostCategoryAlreadyExist(title.trim())
        }

        const transaction = new Date().getTime()
        const data = BackofficePostCategory.create(title, description, transaction)

        return await this.repository.save(data)
    }
}