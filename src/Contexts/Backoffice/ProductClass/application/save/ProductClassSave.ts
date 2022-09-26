import { ProductClassRepository } from '../../domain/ProductClassRepository';
import { ProductClass } from '../../domain/ProductClass';
import { ProductClassName } from '../../domain/ProductClassName';
import { ProductClassRequiredShipping } from '../../domain/ProductClassRequiredShipping';
import { ProductClassTrackStock } from '../../domain/ProductClassTrackStock';
import { ProductClassCreatedAt } from '../../domain/ProductClassCreatedAt';
import { ProductClassId } from '../../domain/ProductClassId';

export class ProductClassSave {
    constructor(private repository: ProductClassRepository) { }

    async run({ id, name, required_shipping, track_stock, created_at }: { id: ProductClassId, name: ProductClassName, required_shipping: ProductClassRequiredShipping, track_stock: ProductClassTrackStock, created_at: ProductClassCreatedAt }): Promise<void> {

        const data = ProductClass.create(id, name, required_shipping, track_stock, created_at);

        return await this.repository.save(data);
    }
}