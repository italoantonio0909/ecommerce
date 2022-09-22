import { Command } from '../../../../Shared/domain/Command';

export class CategorySaveCommand extends Command {

    id: string;
    name: string;
    description: string;
    is_public: boolean;
    created_at: Date;

    constructor({ id, name, description, is_public, created_at }: { id: string, name: string, description: string, is_public: boolean, created_at: Date }) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.is_public = is_public;
        this.created_at = created_at;
    }
}