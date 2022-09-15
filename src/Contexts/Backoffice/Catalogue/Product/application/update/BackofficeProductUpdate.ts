import { BackofficeProductRepository } from '../../domain/BackofficeProductRepository';
import { BackofficeProduct } from '../../domain/BackofficeProduct';

export class BackofficeProductUpdate {
    constructor(
        private readonly repository: BackofficeProductRepository
    ) { }

    async update(uid: string, product: Partial<BackofficeProduct>): Promise<any> {
        return await this.repository.update(uid, product)
    }
}