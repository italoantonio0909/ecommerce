import { CommandHandler } from "../../../../Shared/domain/CommandHandler";
import { SubscriberSave } from "./SubscriberSave";
import { SubscriberSaveCommand } from './SubscriberSaveCommand';
import { Command } from '../../../../Shared/domain/Command';
import { SubscriberEmail } from "../../domain/SubscriberEmail";

export class SubscriberSaveCommandHandler implements CommandHandler<SubscriberSaveCommand> {
    constructor(private subscriberSave: SubscriberSave) { }

    subscribedTo(): Command {
        return SubscriberSaveCommand;
    }

    async handle(command: SubscriberSaveCommand): Promise<void> {

        const email = new SubscriberEmail(command.email);
        await this.subscriberSave.run(email);
    }
}