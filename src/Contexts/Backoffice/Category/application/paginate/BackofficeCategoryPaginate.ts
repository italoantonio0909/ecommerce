import { BackofficeCategoryRepository } from '../../domain/BackofficeCategoryRepository';
import { BackofficeCategory } from '../../domain/BackofficeCategory';
import { Paginate } from '../../../../Shared/domain/Paginate';

export class BackofficeCategoryPaginate {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  async paginate(limit: number, page: number): Promise<Paginate<BackofficeCategory>> {
    return await this.repository.paginate(limit, page);
  }
}