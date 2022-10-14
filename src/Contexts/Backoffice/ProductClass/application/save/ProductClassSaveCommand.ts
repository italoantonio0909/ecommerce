import { Command } from '../../../../Shared/domain/Command';

export class ProductClassSaveCommand extends Command {
    id: string;
    name: string;
    required_shipping: boolean;
    track_stock: boolean;
    created_at: Date;

    constructor({ id, name, required_shipping, track_stock, created_at }: { id: string, name: string, required_shipping: boolean, track_stock: boolean, created_at: Date }) {
        super();
        this.id = id;
        this.name = name;
        this.required_shipping = required_shipping;
        this.track_stock = track_stock;
        this.created_at = created_at;
    }
}