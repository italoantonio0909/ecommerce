import { BackofficePostCategoryRepository } from '../../domain/BackofficePostCategoryRepository';
import { BackofficePostCategory } from '../../domain/BackofficePostCategory';

export class BackofficePostCategoryFind {
    constructor(
        private repository: BackofficePostCategoryRepository
    ) { }

    async find(title: string): Promise<BackofficePostCategory> {
        return await this.repository.find(title);
    }
}