import { BackofficePostCategory } from './BackofficePostCategory';

export interface BackofficePostCategoryRepository {
    find(title: string): Promise<BackofficePostCategory>;
    save(category: BackofficePostCategory): Promise<void>;
}