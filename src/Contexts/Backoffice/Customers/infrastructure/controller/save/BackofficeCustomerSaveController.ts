import { NextFunction, Request, Response } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { BackofficeCustomerSave } from '../../../application/save/BackofficeCustomerSave';

export class BackofficeCustomerSaveController implements Controller {
    constructor(
        private readonly customerCreate: BackofficeCustomerSave
    ) { }

    async run(req: Request, res: Response, next: NextFunction) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const phoneNumber = req.body.phoneNumber;
            const displayName = req.body.displayName;

            await this.customerCreate.save(email, password, phoneNumber, displayName);
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }
}