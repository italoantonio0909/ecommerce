import { BackofficeCategory } from '../../domain/BackofficeCategory';
import { BackofficeCategoryRepository } from '../../domain/BackofficeCategoryRepository';
import { Paginate } from '../../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../Shared/infrastructure/persistence/firebase/FirebaseRepository';

export class BackofficeCategoryWebApiClient extends FirebaseRepository<BackofficeCategory> implements BackofficeCategoryRepository {

  async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeCategory>> {

    return await this.paginated(limitOfDocuments, page);
  }

  async create(category: BackofficeCategory): Promise<void> {

    await this.persist(category);
  }

  async search(name: string): Promise<BackofficeCategory> {
    const ref = this.collection().where("name", "==", name)

    const snapshot = await ref.get();

    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs[0].data() as BackofficeCategory
  }

  async update(uid: string, category: Partial<BackofficeCategory>): Promise<void> {
    const ref = this.collection().doc(uid);

    await ref.update(category);
  }

  async delete(uid: string, category: Partial<BackofficeCategory>): Promise<void> {
    await this.collection().doc(uid).update(category);
  }

  moduleName(): string {
    return 'category';
  }

  orderBy(): string {
    return 'created_at';
  }
}
