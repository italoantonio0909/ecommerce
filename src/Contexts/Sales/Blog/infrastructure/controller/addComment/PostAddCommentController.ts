import { NextFunction, Request, Response } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { PostAddComment } from '../../../application/addComment/PostAddComment';
import { Comment } from '../../../domain/Blog';

export class PostAddCommentController implements Controller {
    constructor(
        private readonly post: PostAddComment
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { postUid } = req.params;
            const data = req.body as Comment;
            const result = await this.post.addComment(postUid, data);
            return res.status(201).send(result)
        } catch (error) {
            next(error)
        }
    }
}