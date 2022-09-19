import { Command } from '../../../../Shared/domain/Command';

export class CustomerSaveCommand extends Command {
    id: string;
    email: string;
    password: string;
    displayName: string;

    constructor({ id, email, password, displayName }: { id: string, email: string, password: string, displayName: string }) {
        super();
        this.id = id;
        this.email = email;
        this.password = password;
        this.displayName = displayName;
    }
}