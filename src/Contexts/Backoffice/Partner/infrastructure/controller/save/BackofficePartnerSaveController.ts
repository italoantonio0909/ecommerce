import { Response, Request } from 'express';
import { Controller } from '../../../../../../apps/Sales/controllers/Controller';
import { Customer } from "../../../../../Sales/Customers/domain/Customer";
import { BackofficePartnerSave } from '../../../application/save/BackofficePartnerSave';

export class BackofficePartnerSaveController implements Controller {

    constructor(
        private readonly partner: BackofficePartnerSave
    ) { }

    async run(req: Request, res: Response) {
        try {
            const code = req.body.code;
            const name = req.body.name;
            const users: Array<Customer> = req.body.users;

            const result = await this.partner.create(code, name, users);

            return res.status(201).send(result)
        } catch (error) {
        }
    }
}