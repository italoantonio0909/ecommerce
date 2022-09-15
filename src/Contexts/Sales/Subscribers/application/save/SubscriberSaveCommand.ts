import { Command } from '../../../../Shared/domain/Command';

export class SubscriberSaveCommand extends Command {
    email: string;

    constructor({ email }: { email: string }) {
        super();
        this.email = email;
    }
}