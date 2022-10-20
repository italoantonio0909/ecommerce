import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { ProductSaveCommand } from './ProductSaveCommand';
import { ProductId } from '../../domain/ProductId';
import { ProductSave } from './ProductSave';
import { ProductStructure } from '../../domain/ProductStructure';
import { ProductIsPublic } from '../../domain/ProductIsPublic';
import { ProductTitle } from '../../domain/ProductTitle';
import { ProductDescription } from '../../domain/ProductDescription';
import { ProductMetaTitle } from '../../domain/ProductMetaTitle';
import { ProductMetaDescription } from '../../domain/ProductMetaDescription';
import { ProductClassId } from '../../../ProductClass/domain/ProductClassId';
import { ProductIsDiscountable } from '../../domain/ProductIsDiscountable';
import { ProductRating } from '../../domain/ProductRating';
import { ProductCreatedAt } from '../../domain/ProductCreatedAt';
import { CategoryId } from '../../../Category/domain/CategoryId';

export class ProductSaveCommandHandler implements CommandHandler<ProductSaveCommand>{

    constructor(private productSave: ProductSave) { }

    subscribedTo() {
        return ProductSaveCommand;
    }

    async handle(command: ProductSaveCommand) {

        const id = new ProductId(command.id);
        const structure = new ProductStructure(command.structure);
        const is_public = new ProductIsPublic(command.is_public);
        const parent = new ProductId(command.parent);
        const title = new ProductTitle(command.title);
        const description = new ProductDescription(command.description);
        const meta_title = new ProductMetaTitle(command.meta_title);
        const meta_description = new ProductMetaDescription(command.meta_description);
        const product_class = new ProductClassId(command.product_class);
        const categories = new Array<CategoryId>();
        const is_discountable = new ProductIsDiscountable(command.is_discountable);
        const rating = new ProductRating(command.rating);
        const created_at = new ProductCreatedAt(command.created_at);

        await this.productSave.run({
            id,
            structure,
            is_public,
            parent,
            title,
            description,
            meta_title,
            meta_description,
            product_class,
            categories,
            is_discountable,
            rating,
            created_at
        });
    }
}