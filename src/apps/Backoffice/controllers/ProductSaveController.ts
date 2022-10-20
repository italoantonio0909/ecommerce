import { Controller } from '../../Sales/controllers/Controller';
import { Request, Response } from 'express';
import { CommandBus } from '../../../Contexts/Shared/domain/CommandBus';
import { ProductSaveCommand } from '../../../Contexts/Backoffice/Product/application/save/ProductSaveCommand';
import { Structure } from '../../../Contexts/Backoffice/Product/domain/ProductStructure';
import httpStatus from 'http-status';

export class ProductSaveController implements Controller {
    constructor(private commandBus: CommandBus) { }

    async run(req: Request, res: Response) {
        const id: string = req.body.id;
        const structure: Structure = req.body.structure;
        const is_public: boolean = req.body.is_public;
        const parent: string = req.body.parent;
        const title: string = req.body.title;
        const description: string = req.body.description;
        const meta_title: string = req.body.meta_title;
        const meta_description: string = req.body.meta_description;
        const product_class: string = req.body.product_class;
        const categories: Array<string> = req.body.categories;
        const is_discountable: boolean = req.body.is_discountable;
        const rating: number = req.body.rating;
        const created_at: Date = req.body.created_at;

        try {

            const command = new ProductSaveCommand({
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

            await this.commandBus.dispatch(command);

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).send(error.message);
        }

        res.status(httpStatus.CREATED).send();

    }
}