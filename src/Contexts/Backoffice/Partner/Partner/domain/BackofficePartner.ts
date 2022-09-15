import { Customer } from '../../../../Sales/Customers/domain/Customer';
import { BackofficePartnerCode } from './BackofficePartnerCode';
import { BackofficePartnerName } from './BackofficePartnerName';
import { BackofficePartnerCreatedAt } from './BackofficePartnerCreatedAt';

export class BackofficePartner {
    readonly code: BackofficePartnerCode;
    readonly name: BackofficePartnerName;
    readonly users: Array<Customer>;
    readonly modified_at: number;
    readonly created_at: BackofficePartnerCreatedAt;

    constructor(code: BackofficePartnerCode, name: BackofficePartnerName, users: Array<Customer>, created_at: BackofficePartnerCreatedAt
    ) {
        this.code = code;
        this.name = name;
        this.users = users;
        this.created_at = created_at;
    }

    static create(code: string, name: string, users: Array<Customer>, created_at: number): BackofficePartner {
        return new BackofficePartner(
            new BackofficePartnerCode(code),
            new BackofficePartnerName(name),
            users,
            new BackofficePartnerCreatedAt(created_at)
        );
    }
}