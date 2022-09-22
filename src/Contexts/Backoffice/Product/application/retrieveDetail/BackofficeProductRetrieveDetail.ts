import { BackofficeProductRepository } from '../../domain/BackofficeProductRepository';
import { BackofficeProduct } from '../../domain/BackofficeProduct';

export class BackofficeProductRetrieveDetail {
    constructor(
        private readonly repository: BackofficeProductRepository
    ) { }

    async retrieveDetail(uid: string): Promise<BackofficeProduct> {
        return await this.repository.retrieveDetail(uid)
    }
}