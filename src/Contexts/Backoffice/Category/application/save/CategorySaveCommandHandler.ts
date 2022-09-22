import { CommandHandler } from "../../../../Shared/domain/CommandHandler";
import { Command } from '../../../../Shared/domain/Command';
import { CategorySave } from './CategorySave';
import { CategorySaveCommand } from './CategorySaveCommand';
import { CategoryId } from "../../domain/CategoryId";
import { CategoryName } from '../../domain/CategoryName';
import { CategoryDescription } from "../../domain/CategoryDescription";
import { CategoryStatus } from "../../domain/CategoryStatus";
import { CategoryCreatedAt } from "../../domain/CategoryCreatedAt";

export class CategorySaveCommandHandler implements CommandHandler<CategorySaveCommand> {
    constructor(private category: CategorySave) { }

    subscribedTo(): Command {
        return CategorySaveCommand;
    }

    async handle(command: CategorySaveCommand): Promise<void> {

        const id = new CategoryId(command.id);
        const name = new CategoryName(command.name);
        const description = new CategoryDescription(command.description);
        const is_public = new CategoryStatus(command.is_public);
        const created_at = new CategoryCreatedAt(command.created_at);

        await this.category.run({ id, name, description, is_public, created_at });
    }
}