import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../apps/Sales/controllers/Controller';

export class AuthenticationSignOutController implements Controller {

    constructor() { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            res.clearCookie('session');
            return res.status(201).send();
        } catch (error) {
            return res.status(401).send();
        }
    }
}