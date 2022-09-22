import { Paginate } from '../../../../Shared/domain/Paginate';
import { CategoryRepository } from '../../domain/CategoryRepository';
import { Category } from '../../domain/Category';

export class BackofficeCategoryPaginate {
  constructor(private repository: CategoryRepository) { }

  async paginate(limit: number, page: number): Promise<Paginate<Category>> {
    return await this.repository.paginate(limit, page);
  }
}