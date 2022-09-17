import { Response, Request } from 'express';
import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { BackofficeCategory } from "../../../domain/BackofficeCategory";
import { BackofficeCategoryUpdate } from '../../../application/update/BackofficeCategoryUpdate';

export class BackofficeCategoryUpdateController implements Controller {

    constructor(
        private readonly category: BackofficeCategoryUpdate
    ) { }

    async run(req: Request, res: Response) {
        try {
            const category = req.body as Partial<BackofficeCategory>;
            const { uid } = req.params;
            // const result = await this.category.update(uid, category)
            // return res.status(201).send(result)
        } catch (error) {

        }
    }
}