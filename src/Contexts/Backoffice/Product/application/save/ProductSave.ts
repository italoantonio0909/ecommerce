import { ProductStructure } from '../../domain/ProductStructure';
import { ProductRepository } from '../../domain/ProductRepository';
import { Product } from '../../domain/Product';
import { ProductTitleRequired } from '../../domain/ProductTitleRequired';
import { ProductProductClassRequired } from '../../domain/ProductProductClassRequired';
import { ProductShouldNotHaveParent } from '../../domain/ProductShouldNotHaveParent';
import { ProductChildShouldHaveParent } from '../../domain/ProductChildShouldHaveParent';
import { ProductChildNotMustProductClass } from '../../domain/ProductChildNotMustProductClass';
import { ProductChildShouldNotHaveCategory } from '../../domain/ProductChildShouldNotHaveCategory';
import { ProductId } from '../../domain/ProductId';
import { ProductIsPublic } from '../../domain/ProductIsPublic';
import { ProductTitle } from '../../domain/ProductTitle';
import { ProductDescription } from '../../domain/ProductDescription';
import { ProductMetaTitle } from '../../domain/ProductMetaTitle';
import { ProductMetaDescription } from '../../domain/ProductMetaDescription';
import { ProductClassId } from '../../../ProductClass/domain/ProductClassId';
import { CategoryId } from '../../../Category/domain/CategoryId';
import { ProductIsDiscountable } from '../../domain/ProductIsDiscountable';
import { ProductRating } from '../../domain/ProductRating';
import { ProductCreatedAt } from '../../domain/ProductCreatedAt';
import { EventBus } from '../../../../Shared/domain/EventBus';

export class ProductSave {
    constructor(private repository: ProductRepository, private eventBus: EventBus) { }

    async productCleanStandlone(product: Product) {
        const { title, product_class, parent } = product;
        if (!title) {
            throw new ProductTitleRequired()
        }
        if (!product_class) {
            throw new ProductProductClassRequired()
        }
        if (parent) {
            throw new ProductShouldNotHaveParent()
        }
    }

    async productCleanParent(product: Product) {
        await this.productCleanStandlone(product)
    }

    async productCleanChild(product: Product) {
        const { parent, product_class } = product;
        if (!parent) {
            throw new ProductChildShouldHaveParent();
        }

        if (product_class) {
            throw new ProductChildNotMustProductClass();
        }

        //  if (parent && parent. !== "parent") {
        //     throw new ProductChildShouldHaveParent();
        // }

        if (product.categories && product.categories.length !== 0) {
            throw new ProductChildShouldNotHaveCategory();
        }
    }

    async productValidate(product: Product) {
        /**
        Validate a product. Those are the rules:
        +---------------+-------------+--------------+--------------+
        |               | stand alone | parent       | child        |
        +---------------+-------------+--------------+--------------+
        | title         | required    | required     | optional     |
        +---------------+-------------+--------------+--------------+
        | product class | required    | required     | must be None |
        +---------------+-------------+--------------+--------------+
        | parent        | forbidden   | forbidden    | required     |
        +---------------+-------------+--------------+--------------+
        | stockrecords  | 0 or more   | forbidden    | 0 or more    |
        +---------------+-------------+--------------+--------------+
        | categories    | 1 or more   | 1 or more    | forbidden    |
        +---------------+-------------+--------------+--------------+
        | attributes    | optional    | optional     | optional     |
        +---------------+-------------+--------------+--------------+
        | rec. products | optional    | optional     | unsupported  |
        +---------------+-------------+--------------+--------------+
        | options       | optional    | optional     | forbidden    |
        +---------------+-------------+--------------+--------------+
        Because the validation logic is quite complex, validation is delegated
        to the sub method appropriate for the product's structure.
        */
        if (product.structure.value === "child") {
            await this.productCleanChild(product)
        }

        if (product.structure.value === "parent") {
            await this.productCleanParent(product)
        }

        if (product.structure.value === "standalone") {
            await this.productCleanStandlone(product)
        }
    }

    async create(
        id: ProductId,
        structure: ProductStructure,
        is_public: ProductIsPublic,
        parent: ProductId,
        title: ProductTitle,
        description: ProductDescription,
        meta_title: ProductMetaTitle,
        meta_description: ProductMetaDescription,
        product_class: ProductClassId,
        categories: Array<CategoryId>,
        is_discountable: ProductIsDiscountable,
        rating: ProductRating,
        created_at: ProductCreatedAt
    ): Promise<void> {

        // await this.productValidate(product);

        const product = Product.create(
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
        );

        await this.repository.save(product)

        await this.eventBus.publish(product.pullDomainEvents());
    }
}