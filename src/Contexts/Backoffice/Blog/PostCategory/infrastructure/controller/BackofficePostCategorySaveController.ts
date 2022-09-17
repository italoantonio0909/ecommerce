import { Response, Request } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficePostCategorySave } from '../../application/save/BackofficePostCategorySave';

export class BackofficePostCategorySaveController implements Controller {

    constructor(
        private readonly category: BackofficePostCategorySave
    ) { }

    async run(req: Request, res: Response) {
        try {
            const title: string = req.body.title;
            const description: string = req.body.description;

            const result = await this.category.save(title, description);
            return res.status(201).send(result)
        } catch (error) {

        }
    }
}