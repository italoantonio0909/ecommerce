import { BackofficeCategoryRepository } from '../../domain/BackofficeCategoryRepository';
import { BackofficeCategory } from '../../domain/BackofficeCategory';

export class BackofficeCategoryDelete {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  async delete(uid: string, category: Partial<BackofficeCategory>): Promise<void> {
    return await this.repository.delete(uid, category);
  }
}