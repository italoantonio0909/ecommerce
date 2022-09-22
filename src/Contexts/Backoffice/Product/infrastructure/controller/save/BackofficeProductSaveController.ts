import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficeProduct } from '../../../domain/BackofficeProduct';
import { ProductStructure } from '../../../domain/BackofficeProductStructure';
import { BackofficeProductClass } from '../../../../Product-Class/domain/ProductClass';
import { BackofficeCategory } from '../../../../Category/domain/BackofficeCategory';
import { BackofficeProductSave } from '../../../application/save/BackofficeProductSave';

export class BackofficeProductSaveController implements Controller {
    constructor(
        private readonly product: BackofficeProductSave
    ) { }

    async run(req: Request, res: Response) {
        try {
            const structure: ProductStructure = req.body.structure;
            const is_public: boolean = req.body.is_public;
            const parent: BackofficeProduct = req.body.parent;
            const title: string = req.body.title;
            const description: string = req.body.description;
            const meta_title: string = req.body.meta_title;
            const meta_description: string = req.body.meta_description;
            const product_class: BackofficeProductClass = req.body.product_class;
            const categories: Array<BackofficeCategory> = req.body.categories;
            const is_discountable: boolean = req.body.is_discountable;
            const rating: number = req.body.rating;

            const result = await this.product.create(
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
                rating
            );

            return res.status(201).send(result)
        } catch (error) {
        }
    }
}