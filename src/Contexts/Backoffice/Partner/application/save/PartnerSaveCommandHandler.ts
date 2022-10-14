import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { PartnerSaveCommand } from './PartnerSaveCommand';
import { PartnerSave } from './PartnerSave';
import { Command } from '../../../../Shared/domain/Command';
import { PartnerUid } from '../../domain/PartnerUid';
import { PartnerCode } from '../../domain/PartnerCode';
import { PartnerName } from '../../domain/PartnerName';
import { PartnerCreatedAt } from '../../domain/PartnerCreatedAt';

export class PartnerSaveCommandHandler implements CommandHandler<PartnerSaveCommand>{
    constructor(private partnerSave: PartnerSave) { }

    subscribedTo(): Command {
        return PartnerSaveCommand;
    }

    async handle(command: PartnerSaveCommand): Promise<void> {
        const id = new PartnerUid(command.id);
        const code = new PartnerCode(command.code);
        const name = new PartnerName(command.name);
        const created_at = new PartnerCreatedAt(command.created_at);

        await this.partnerSave.run({ id, code, name, created_at });
    }
}