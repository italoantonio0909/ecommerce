import { Controller } from '../../../../../../../apps/Sales/controllers/Controller';
import { NextFunction, Request, Response } from 'express';
import { BackofficePostRetrieveDetail } from "../../../application/retrieveDetail/BackofficePostRetrieveDetail";

export class BackofficePostRetrieveDetailController implements Controller {
    constructor(
        private readonly post: BackofficePostRetrieveDetail
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const { uid } = req.params;
            const result = await this.post.retrieveDetail(uid);
            return res.status(201).send(result);
        } catch (error) {
            next(error)
        }
    }
}