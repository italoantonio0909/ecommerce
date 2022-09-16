import { Command } from '../../../../Shared/domain/Command';
import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { CustomerSaveCommand } from './CustomerSaveCommand';
import { CustomerSave } from './CustomerSave';
import { CustomerEmail } from '../../domain/CustomerEmail';
import { CustomerPassword } from '../../domain/CustomerPassword';
import { CustomerDisplayName } from '../../domain/CustomerDisplayName';

export class CustomerSaveCommandHandler implements CommandHandler<CustomerSaveCommand> {

    constructor(private customerSave: CustomerSave) { }

    subscribedTo(): Command {
        return CustomerSaveCommand;
    }

    async handle(command: CustomerSaveCommand): Promise<void> {
        await this.customerSave.run(
            new CustomerEmail(command.email),
            new CustomerPassword(command.password),
            new CustomerDisplayName(command.displayName)
        )
    }
}