import { BackofficePartnerRepository } from '../../domain/PartnerRepository';
import { BackofficePartner } from '../../domain/Partner';
import { Customer } from "../../../../Sales/Customers/domain/Customer";

export class BackofficePartnerSave {
    constructor(
        private repository: BackofficePartnerRepository
    ) { }

    async create(code: string, name: string, users: Array<Customer>): Promise<BackofficePartner> {
        const created_at = new Date().getTime();
        const partner = BackofficePartner.create(
            code,
            name,
            users,
            created_at
        );

        return await this.repository.create(partner);
    }
}