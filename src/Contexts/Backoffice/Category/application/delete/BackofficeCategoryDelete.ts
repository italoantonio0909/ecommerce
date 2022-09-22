import { BackofficeCategoryRepository } from '../../domain/CategoryRepository';
import { BackofficeCategory } from '../../domain/Category';

export class BackofficeCategoryDelete {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  async delete(uid: string, category: Partial<BackofficeCategory>): Promise<void> {
    return await this.repository.delete(uid, category);
  }
}