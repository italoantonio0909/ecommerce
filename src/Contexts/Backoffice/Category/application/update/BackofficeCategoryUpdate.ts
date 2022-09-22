import { BackofficeCategoryRepository } from '../../domain/BackofficeCategoryRepository';
import { BackofficeCategory } from '../../domain/BackofficeCategory';

export class BackofficeCategoryUpdate {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  // async update(uid: string, category: Partial<BackofficeCategory>): Promise<BackofficeCategory> {
  // const data = {
  //   ...category,
  //   modified_at: new Date().getTime()
  // }

  // return await this.repository.update(uid, data);
  // }
}