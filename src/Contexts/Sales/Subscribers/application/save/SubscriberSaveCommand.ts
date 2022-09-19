import { Command } from '../../../../Shared/domain/Command';

export class SubscriberSaveCommand extends Command {
    id: string;
    email: string;
    status: boolean;
    created_at: Date;

    constructor({ id, email, created_at, status }: { id: string, email: string, status: boolean, created_at: Date }) {
        super();
        this.id = id;
        this.email = email;
        this.status = status;
        this.created_at = created_at;
    }
}