import { BackofficeProductClassRepository } from '../../domain/BackofficeProductClassRepository';
import { BackofficeProductClass } from '../../domain/ProductClass';


export class BackofficeProductClassSave {
    constructor(
        private readonly repository: BackofficeProductClassRepository
    ) { }

    async create(name: string, required_shipping: boolean, track_stock: boolean): Promise<void> {

        const transaction = new Date().getTime();
        const data = BackofficeProductClass.create(
            name,
            required_shipping,
            track_stock,
            transaction
        );

        return await this.repository.create(data);
    }
}