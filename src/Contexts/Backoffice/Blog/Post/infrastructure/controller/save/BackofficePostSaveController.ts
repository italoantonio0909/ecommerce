import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { Request, Response } from 'express';
import { BackofficePostSave } from '../../../application/save/BackofficePostSave';

export class BackofficePostSaveController implements Controller {
    constructor(private readonly post: BackofficePostSave
    ) { }

    async run(req: Request, res: Response) {
        try {
            const title = req.body.title;
            const meta_description = req.body.meta_description;
            const description = req.body.description;
            const status = req.body.status;
            const image = req.body.image;
            const published: boolean = req.body.published;

            await this.post.create(title, meta_description, description, status, image, published);

            return res.status(201).send()
        } catch (error) {

        }
    }
}