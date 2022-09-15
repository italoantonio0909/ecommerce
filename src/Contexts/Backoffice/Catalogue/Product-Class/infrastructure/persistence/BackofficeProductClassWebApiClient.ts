import { BackofficeProductClassRepository } from '../../domain/BackofficeProductClassRepository';
import { BackofficeProductClass } from '../../domain/ProductClass';
import { Paginate } from '../../../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../../Shared/infrastructure/persistence/firebase/FirebaseRepository';


export class BackofficeProductClassWebApiClient extends FirebaseRepository<BackofficeProductClass> implements BackofficeProductClassRepository {

    async create(product_class: BackofficeProductClass): Promise<void> {
        await this.persist(product_class);
    }

    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeProductClass>> {

        return this.paginated(limitOfDocuments, page);
    }

    moduleName(): string {
        return 'product_class'
    }

    orderBy(): string {
        return 'created_at'
    }
}