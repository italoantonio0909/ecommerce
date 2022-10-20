import { FirebaseRepository } from '../../../Shared/infrastructure/persistence/FirebaseRepository';
import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';

export class ProductWebApiClient extends FirebaseRepository<Product> implements ProductRepository {

    async save(product: Product): Promise<void> {
        await this.persist(product);
    }

    moduleName(): string {
        return 'product';
    }

    orderBy(): string {
        return 'created_at';
    }
}