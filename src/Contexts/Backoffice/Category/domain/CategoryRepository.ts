import { Paginate } from '../../Shared/domain/Paginate';
import { Category } from './Category';

export interface CategoryRepository {
  paginate(limit: number, page: number): Promise<Paginate<Category>>;
  save(category: Category): Promise<void>;
  search(name: string): Promise<Category>;
}
