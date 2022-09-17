import { Request, Response } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { PostPaginate } from '../../../application/paginate/PostPaginate';

export class PostPaginateController implements Controller {
    constructor(
        private readonly post: PostPaginate
    ) { }

    async run(req: Request, res: Response) {
        try {
            const { limitOfDocuments, page } = req.params;
            const result = await this.post.paginate(parseInt(limitOfDocuments), parseInt(page))
            return res.status(201).send(result)
        } catch (error) {

        }
    }
}