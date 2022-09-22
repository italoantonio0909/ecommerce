import { BackofficeCategoryRepository } from '../../domain/CategoryRepository';
import { BackofficeCategory } from '../../domain/Category';

export class BackofficeCategorySearch {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  async search(name: string): Promise<BackofficeCategory> {
    return await this.repository.search(name);
  }
}