import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { PartnerCode } from './PartnerCode';
import { PartnerCreatedAt } from './PartnerCreatedAt';
import { PartnerName } from './PartnerName';
import { PartnerId } from './PartnerId';

export class Partner extends AggregateRoot {
    readonly id: PartnerId;
    readonly code: PartnerCode;
    readonly name: PartnerName;
    readonly created_at: PartnerCreatedAt;

    constructor(id: PartnerId, code: PartnerCode, name: PartnerName, created_at: PartnerCreatedAt) {
        super();
        this.id = id;
        this.code = code;
        this.name = name;
        this.created_at = created_at;
    }

    static create(id: PartnerId, code: PartnerCode, name: PartnerName, created_at: PartnerCreatedAt): Partner {
        return new Partner(id, code, name, created_at);
    }

    toPrimitives() {
        return {
            id: this.id.value,
            code: this.code.value,
            name: this.name.value,
            created_at: this.created_at.value
        }
    }
}