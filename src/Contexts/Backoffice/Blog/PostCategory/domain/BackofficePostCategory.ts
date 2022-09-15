import { BackofficePostCategoryTitle } from './BackofficePostCategoryTitle';
import { BackofficePostCategoryDescription } from './BackofficePostCategoryDescription';
import { BackofficePostCategoryCreatedAt } from './BackofficePostCategoryCreatedAt';
import { BackofficePostCategoryId } from './BackofficePostCategoryId';

export class BackofficePostCategory {
    readonly id: BackofficePostCategoryId;
    readonly title: BackofficePostCategoryTitle;
    readonly description: BackofficePostCategoryDescription;
    readonly created_at: BackofficePostCategoryCreatedAt;

    constructor(title: BackofficePostCategoryTitle, description: BackofficePostCategoryDescription, created_at: BackofficePostCategoryCreatedAt
    ) {
        this.title = title;
        this.description = description;
        this.created_at = created_at;
    }

    static create(title: string, description: string, created_at: number): BackofficePostCategory {
        return new BackofficePostCategory(
            new BackofficePostCategoryTitle(title),
            new BackofficePostCategoryDescription(description),
            new BackofficePostCategoryCreatedAt(created_at)
        )
    }
}