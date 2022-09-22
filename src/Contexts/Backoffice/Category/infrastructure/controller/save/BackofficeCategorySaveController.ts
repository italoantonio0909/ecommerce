import { Response, Request } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficeCategorySave } from '../../../application/save/BackofficeCategorySave';

export class BackofficeCategorySaveController implements Controller {

    constructor(
        private readonly category: BackofficeCategorySave
    ) { }

    async run(req: Request, res: Response) {
        try {
            const name: string = req.body.name;
            const description: string = req.body.description;
            const is_public: boolean = req.body.is_public;
            // const image: string = req.body.image;

            const result = await this.category.create(
                name,
                description,
                "",
                // image,
                is_public
            )
            return res.status(201).send(result);
        } catch (error) {

        }
    }
}