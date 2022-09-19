import { BasketRepository } from '../../domain/BasketRepository';
import { Product } from '../../../../Catalogue/Product/domain/Product';


export class BasketAddProduct {
    constructor(
        private basketRepository: BasketRepository
    ) { }

    async addProduct(product: Product, quantity: number): Promise<any> {

        return await this.basketRepository.add_product(product, quantity);
    }
}