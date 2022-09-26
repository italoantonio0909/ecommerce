import { BackofficeProductRepository } from '../../domain/ProductRepository';
import { BackofficeProduct } from '../../domain/Product';
import { Paginate } from '../../../../Shared/domain/Paginate';
;

export class BackofficeProductsPaginate {
    constructor(
        private readonly repository: BackofficeProductRepository
    ) { }

    async paginate(limit: number, startAfter: number): Promise<Paginate<BackofficeProduct>> {
        return await this.repository.paginate(limit, startAfter)
    }
}