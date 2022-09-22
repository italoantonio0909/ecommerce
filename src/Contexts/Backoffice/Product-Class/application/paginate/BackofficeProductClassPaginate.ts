import { BackofficeProductClassRepository } from '../../domain/BackofficeProductClassRepository';
import { BackofficeProductClass } from '../../domain/ProductClass';
import { Paginate } from '../../../../Shared/domain/Paginate';


export class BackofficeProductClassPaginate {
    constructor(
        private readonly repository: BackofficeProductClassRepository
    ) { }

    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeProductClass>> {

        return await this.repository.paginate(limitOfDocuments, page);
    }
}