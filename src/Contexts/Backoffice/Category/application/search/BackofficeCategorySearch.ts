import { BackofficeCategoryRepository } from '../../domain/BackofficeCategoryRepository';
import { BackofficeCategory } from '../../domain/BackofficeCategory';

export class BackofficeCategorySearch {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  async search(name: string): Promise<BackofficeCategory> {
    return await this.repository.search(name);
  }
}