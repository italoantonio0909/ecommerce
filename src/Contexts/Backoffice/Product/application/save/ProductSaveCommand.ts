import { Command } from '../../../../Shared/domain/Command';
import { Structure } from '../../domain/ProductStructure';

type Params = {
    id: string;
    structure: Structure;
    is_public: boolean;
    parent: string;
    title: string;
    description: string;
    meta_title: string;
    meta_description: string;
    product_class: string;
    categories: Array<string>;
    is_discountable: boolean;
    rating: number;
    created_at: Date;
}

export class ProductSaveCommand extends Command {
    id: string;
    structure: Structure;
    is_public: boolean;
    parent: string;
    title: string;
    description: string;
    meta_title: string;
    meta_description: string;
    product_class: string;
    categories: Array<string>;
    is_discountable: boolean;
    rating: number;
    created_at: Date;

    constructor({ id, structure, is_discountable, parent, title, description, meta_title, meta_description, product_class, categories, is_public, created_at, rating }: Params) {
        super();
        this.id = id;
        this.structure = structure;
        this.is_public = is_public;
        this.parent = parent;
        this.title = title;
        this.description = description;
        this.meta_title = meta_title;
        this.meta_description = meta_description;
        this.product_class = product_class;
        this.categories = categories;
        this.is_discountable = is_discountable;
        this.rating = rating;
        this.created_at = created_at;
    }
}