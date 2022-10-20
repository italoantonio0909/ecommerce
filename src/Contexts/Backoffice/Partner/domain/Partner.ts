<<<<<<< HEAD
=======
import { Customer } from '../../../Sales/Customers/domain/Customer';
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { PartnerCode } from './PartnerCode';
import { PartnerCreatedAt } from './PartnerCreatedAt';
import { PartnerName } from './PartnerName';
import { PartnerUid } from './PartnerUid';

export class Partner extends AggregateRoot {
<<<<<<< HEAD
    readonly id: PartnerUid;
    readonly code: PartnerCode;
    readonly name: PartnerName;
    readonly created_at: PartnerCreatedAt;

    constructor(id: PartnerUid, code: PartnerCode, name: PartnerName, created_at: PartnerCreatedAt) {
=======

    readonly id: PartnerUid;
    readonly code: PartnerCode;
    readonly name: PartnerName;
    readonly users: Array<Customer>;
    readonly created_at: PartnerCreatedAt;

    constructor(id: PartnerUid, code: PartnerCode, name: PartnerName, users: Array<Customer>, created_at: PartnerCreatedAt) {
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
        super();
        this.id = id;
        this.code = code;
        this.name = name;
<<<<<<< HEAD
        this.created_at = created_at;
    }

    static create(id: PartnerUid, code: PartnerCode, name: PartnerName, created_at: PartnerCreatedAt): Partner {
        return new Partner(id, code, name, created_at);
=======
        this.users = users;
        this.created_at = created_at;
    }

    static create(id: PartnerUid, code: PartnerCode, name: PartnerName, users: Array<Customer>, created_at: PartnerCreatedAt): Partner {
        return new Partner(id, code, name, users, created_at);
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
    }

    toPrimitives() {
        return {
            id: this.id.value,
            code: this.code.value,
            name: this.name.value,
<<<<<<< HEAD
=======
            users: this.users,
>>>>>>> 1acc7971300af8f299b55c1b41ec6b9c68a71ff3
            created_at: this.created_at.value
        }
    }
}