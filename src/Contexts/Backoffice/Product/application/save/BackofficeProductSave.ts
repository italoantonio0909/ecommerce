import { BackofficeProduct } from '../../domain/Product';
import { BackofficeProductRepository } from '../../domain/ProductRepository';
import { BackofficeProductTitleRequired } from '../../domain/ProductTitleRequired';
import { BackofficeProductProductClassRequired } from '../../domain/ProductProductClassRequired';
import { BackofficeProductShouldNotHaveParent } from '../../domain/ProductShouldNotHaveParent';
import { BackofficeProductChildShouldHaveParent } from '../../domain/ProductChildShouldHaveParent';
import { BackofficeProductChildNotMustProductClass } from '../../domain/ProductChildNotMustProductClass';
import { BackofficeProductChildShouldNotHaveCategory } from '../../domain/ProductChildShouldNotHaveCategory';
import { ProductStructure } from '../../domain/ProductStructure';
import { ProductClass } from '../../../ProductClass/domain/ProductClass';
import { Category } from '../../../Category/domain/Category';

export class BackofficeProductSave {
    constructor(
        private readonly repository: BackofficeProductRepository
    ) { }

    async productCleanStandlone(product: BackofficeProduct) {
        const { title, product_class, parent } = product;
        if (!title) {
            throw new BackofficeProductTitleRequired()
        }
        if (!product_class) {
            throw new BackofficeProductProductClassRequired()
        }
        if (parent) {
            throw new BackofficeProductShouldNotHaveParent()
        }
    }

    async productCleanParent(product: BackofficeProduct) {
        await this.productCleanStandlone(product)
    }

    async productCleanChild(product: BackofficeProduct) {
        const { parent, product_class } = product;
        if (!parent) {
            throw new BackofficeProductChildShouldHaveParent();
        }

        if (product_class) {
            throw new BackofficeProductChildNotMustProductClass();
        }

        if (parent && parent.structure.value !== "parent") {
            throw new BackofficeProductChildShouldHaveParent();
        }

        if (product.categories && product.categories.length !== 0) {
            throw new BackofficeProductChildShouldNotHaveCategory();
        }
    }

    async productValidate(product: BackofficeProduct) {
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
        structure: ProductStructure,
        is_public: boolean,
        parent: BackofficeProduct,
        title: string,
        description: string,
        meta_title: string,
        meta_description: string,
        product_class: ProductClass,
        categories: Array<Category>,
        is_discountable: boolean,
        rating: number,
    ): Promise<void> {

        // await this.productValidate(product);

        const created_at = new Date().getTime();
        const data = BackofficeProduct.create(
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

        return await this.repository.create(data)
    }
}