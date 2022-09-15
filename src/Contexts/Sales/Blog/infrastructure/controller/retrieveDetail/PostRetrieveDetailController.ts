import { NextFunction, Request, Response } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { PostRetrieveDetail } from '../../../application/retrieveDetail/PostRetrieveDetail';

export class PostRetrieveDetailController implements Controller {
    constructor(
        private readonly post: PostRetrieveDetail
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { postUid } = req.params;
            const result = await this.post.retrieveDetail(postUid);
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}