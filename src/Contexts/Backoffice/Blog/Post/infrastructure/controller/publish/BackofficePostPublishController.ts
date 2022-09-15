import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { NextFunction, Request, Response } from 'express';
import { BackofficePostPublish } from "../../../application/publish/BackofficePostPublish";

export class BackofficePostPublishController implements Controller {
    constructor(
        private readonly post: BackofficePostPublish
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { uid } = req.params;
            const result = await this.post.publish(uid);
            return res.status(201).send(result);
        } catch (error) {
            next(error)
        }
    }
}