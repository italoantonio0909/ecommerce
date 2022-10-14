import { Paginate } from '../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../Shared/infrastructure/persistence/FirebaseRepository';
import { Product } from '../../domain/Product';
import { ProductRepository } from '../../domain/ProductRepository';

export class ProductWebApiClient extends FirebaseRepository<Product> implements ProductRepository {

    async save(product: Product): Promise<void> {
        await this.persist(product);
    }

    async retrieveDetail(uid: string): Promise<Product> {
        const ref = this.collection().doc(uid)

        const product = await ref.get()

        return product.data() as Product
    }


    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<Product>> {

        return await this.paginated(limitOfDocuments, page);
    }

    async update(uid: string, product: Partial<Product>): Promise<any> {
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