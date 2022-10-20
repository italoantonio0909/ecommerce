import { Paginate } from '../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../Shared/infrastructure/persistence/firebase/FirebaseRepository';
import { Category } from '../domain/Category';
import { CategoryRepository } from '../domain/CategoryRepository';

export class CategoryWebApiClient extends FirebaseRepository<Category> implements CategoryRepository {

  async paginate(limitOfDocuments: number, page: number): Promise<Paginate<Category>> {

    return await this.paginated(limitOfDocuments, page);
  }

  async save(category: Category): Promise<void> {

    await this.persist(category);
  }

  async search(name: string): Promise<Category> {
    const ref = this.collection().where("name", "==", name)

    const snapshot = await ref.get();

    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs[0].data() as Category
  }

  moduleName(): string {
    return 'category';
  }

  orderBy(): string {
    return 'created_at';
  }
}
