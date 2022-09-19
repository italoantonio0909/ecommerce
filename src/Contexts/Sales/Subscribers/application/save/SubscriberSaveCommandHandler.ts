import { CommandHandler } from "../../../../Shared/domain/CommandHandler";
import { SubscriberSave } from "./SubscriberSave";
import { SubscriberSaveCommand } from './SubscriberSaveCommand';
import { Command } from '../../../../Shared/domain/Command';
import { SubscriberEmail } from "../../domain/SubscriberEmail";
import { SubscriberCreatedAt } from '../../domain/SubscriberCreatedAt';
import { SubscriberId } from '../../domain/SubscriberId';
import { SubscriberStatus } from '../../domain/SubscriberStatus';

export class SubscriberSaveCommandHandler implements CommandHandler<SubscriberSaveCommand> {
    constructor(private subscriberSave: SubscriberSave) { }

    subscribedTo(): Command {
        return SubscriberSaveCommand;
    }

    async handle(command: SubscriberSaveCommand): Promise<void> {

        const id = new SubscriberId(command.id);
        const email = new SubscriberEmail(command.email);
        const status = new SubscriberStatus(command.status);
        const created_at = new SubscriberCreatedAt(command.created_at);

        await this.subscriberSave.run({ id, email, status, created_at });
    }
}