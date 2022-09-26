import { Paginate } from '../../../../Shared/domain/Paginate';
import { ProductClass } from '../../domain/ProductClass';
import { ProductClassRepository } from '../../domain/ProductClassRepository';


export class ProductClassPaginate {
    constructor(private repository: ProductClassRepository) { }

    async run(limitOfDocuments: number, page: number): Promise<Paginate<ProductClass>> {

        return await this.repository.paginate(limitOfDocuments, page);
    }
}