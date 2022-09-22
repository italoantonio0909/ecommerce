import { BackofficeProductRepository } from '../../domain/BackofficeProductRepository';
import { BackofficeProduct } from '../../domain/BackofficeProduct';
import { Paginate } from '../../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../Shared/infrastructure/persistence/firebase/FirebaseRepository';

export class BackofficeProductWebApiClient extends FirebaseRepository<BackofficeProduct> implements BackofficeProductRepository {

    async create(product: BackofficeProduct): Promise<void> {
        await this.persist(product);
    }

    async retrieveDetail(uid: string): Promise<BackofficeProduct> {
        const ref = this.collection().doc(uid)

        const product = await ref.get()

        return product.data() as BackofficeProduct
    }


    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeProduct>> {

        return await this.paginated(limitOfDocuments, page);
    }

    async update(uid: string, product: Partial<BackofficeProduct>): Promise<any> {
        const ref = this.collection().doc(uid)

        await ref.update(product)
    }

    moduleName(): string {
        return 'product';
    }

    orderBy(): string {
        return 'created_at';
    }
}