import { Response, Request, NextFunction } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { CustomerSave } from '../../../application/save/CustomerSave';

export class CustomerSaveController implements Controller {

    constructor(
        private readonly customer: CustomerSave
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const displayName = req.body.displayName;

            await this.customer.save(email, password, displayName);

            return res.status(201).send();
        } catch (error) {
            next(error)
        }
    }
}