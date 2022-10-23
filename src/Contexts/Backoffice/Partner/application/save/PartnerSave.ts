import { PartnerRepository } from '../../domain/PartnerRepository';
import { PartnerCode } from '../../domain/PartnerCode';
import { PartnerName } from '../../domain/PartnerName';
import { Partner } from '../../domain/Partner';
import { PartnerCreatedAt } from '../../domain/PartnerCreatedAt';
import { PartnerId } from '../../domain/PartnerId';

export class PartnerSave {
    constructor(private repository: PartnerRepository) { }

    async run({ id, code, name, created_at }: { id: PartnerId, code: PartnerCode, name: PartnerName, created_at: PartnerCreatedAt }): Promise<void> {
        const partner = Partner.create(id, code, name, created_at);

        return await this.repository.save(partner);
    }
}