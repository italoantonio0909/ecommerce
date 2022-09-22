import { CategoryRepository } from '../../domain/CategoryRepository';
import { Category } from '../../domain/Category';

export class CategorySearch {
  constructor(private repository: CategoryRepository) { }

  async run(name: string): Promise<Category> {
    return await this.repository.search(name);
  }
}