import { BackofficeCategory } from './BackofficeCategory';
import { Paginate } from '../../../../Shared/domain/Paginate';

export interface BackofficeCategoryRepository {
  paginate(limit: number, page: number): Promise<Paginate<BackofficeCategory>>;
  create(category: BackofficeCategory): Promise<void>;
  search(name: string): Promise<BackofficeCategory>;
  update(uid: string, category: Partial<BackofficeCategory>): Promise<void>;
  delete(uid: string, category: Partial<BackofficeCategory>): Promise<void>;
}
