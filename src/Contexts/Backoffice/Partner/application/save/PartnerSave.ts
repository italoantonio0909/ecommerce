import { PartnerRepository } from '../../domain/PartnerRepository';
import { PartnerCode } from '../../domain/PartnerCode';
import { PartnerName } from '../../domain/PartnerName';
import { PartnerUid } from "../../domain/PartnerUid";
import { Partner } from '../../domain/Partner';
import { PartnerCreatedAt } from '../../domain/PartnerCreatedAt';

export class PartnerSave {
    constructor(private repository: PartnerRepository) { }

    async run({ id, code, name, created_at }: { id: PartnerUid, code: PartnerCode, name: PartnerName, created_at: PartnerCreatedAt }): Promise<void> {
        const partner = Partner.create(id, code, name, created_at);

        return await this.repository.save(partner);
    }
}