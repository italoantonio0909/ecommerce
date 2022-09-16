import { Command } from '../../../../Shared/domain/Command';

export class CustomerSaveCommand extends Command {
    email: string;
    password: string;
    displayName: string;

    constructor({ email, password, displayName }: { email: string, password: string, displayName: string }) {
        super();
        this.email = email;
        this.password = password;
        this.displayName = displayName;
    }
}