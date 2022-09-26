import { BackofficeProductRepository } from '../../domain/ProductRepository';
import { BackofficeProduct } from '../../domain/Product';

export class BackofficeProductRetrieveDetail {
    constructor(
        private readonly repository: BackofficeProductRepository
    ) { }

    async retrieveDetail(uid: string): Promise<BackofficeProduct> {
        return await this.repository.retrieveDetail(uid)
    }
}