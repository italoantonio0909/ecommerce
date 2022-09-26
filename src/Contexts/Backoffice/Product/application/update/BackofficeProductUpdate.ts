import { BackofficeProductRepository } from '../../domain/ProductRepository';
import { BackofficeProduct } from '../../domain/Product';

export class BackofficeProductUpdate {
    constructor(
        private readonly repository: BackofficeProductRepository
    ) { }

    async update(uid: string, product: Partial<BackofficeProduct>): Promise<any> {
        return await this.repository.update(uid, product)
    }
}