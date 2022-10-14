import { Paginate } from '../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../Shared/infrastructure/persistence/firebase/FirebaseRepository';
import { ProductClass } from '../domain/ProductClass';
import { ProductClassRepository } from '../domain/ProductClassRepository';


export class ProductClassWebApiClient extends FirebaseRepository<ProductClass> implements ProductClassRepository {

    async save(product_class: ProductClass): Promise<void> {
        await this.persist(product_class);
    }

    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<ProductClass>> {

        return this.paginated(limitOfDocuments, page);
    }

    moduleName(): string {
        return 'product_class'
    }

    orderBy(): string {
        return 'created_at'
    }
}