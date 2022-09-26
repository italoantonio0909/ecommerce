import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { ProductClassSave } from './ProductClassSave';
import { ProductClassId } from '../../domain/ProductClassId';
import { ProductClassName } from '../../domain/ProductClassName';
import { ProductClassRequiredShipping } from '../../domain/ProductClassRequiredShipping';
import { ProductClassTrackStock } from '../../domain/ProductClassTrackStock';
import { ProductClassCreatedAt } from '../../domain/ProductClassCreatedAt';
import { Command } from '../../../../Shared/domain/Command';
import { ProductClassSaveCommand } from './ProductClassSaveCommand';

export class ProductClassSaveCommandHandler implements CommandHandler<ProductClassSaveCommand>{
    constructor(private productSave: ProductClassSave) { }

    subscribedTo(): Command {
        return ProductClassSaveCommand;
    }

    async handle(command: ProductClassSaveCommand): Promise<void> {
        const id = new ProductClassId(command.id);
        const name = new ProductClassName(command.name);
        const required_shipping = new ProductClassRequiredShipping(command.required_shipping);
        const track_stock = new ProductClassTrackStock(command.track_stock);
        const created_at = new ProductClassCreatedAt(command.created_at);

        await this.productSave.run({ id, name, required_shipping, track_stock, created_at });
    }
}