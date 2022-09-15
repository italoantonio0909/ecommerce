import { Customer } from "../../../../Sales/Customers/domain/Customer";
import { BackofficePostTitle } from './BackofficePostTitle';
import { BackofficePostMetaDescription } from './BackofficePostMetaDescription';
import { BackofficePostDescription } from './BackofficePostDescription';
import { BackofficePostStatus } from './BackofficePostStatus';
import { BackofficePostCreatedAt } from './BackofficePostCreatedAt';
import { BackofficePostPublishAt } from './BackofficePostPublishAt';
import { BackofficePostPublished } from './BackofficePostPublished';
import { BackofficePostModifiedAt } from './BackofficePostModifiedAt';
import { BackofficePostImage } from './BackofficePostImage';
import { BackofficePostId } from './BackofficePostId';
import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot';

export class BackofficePost extends AggregateRoot {
    readonly id: BackofficePostId;
    readonly title: BackofficePostTitle;
    readonly meta_description: BackofficePostMetaDescription;
    readonly description: BackofficePostDescription;
    readonly image: BackofficePostImage;
    readonly comments: Array<BackofficeComment>;
    readonly status: BackofficePostStatus;
    readonly published: BackofficePostPublished;
    readonly publish_at: BackofficePostPublishAt;
    readonly created_at: BackofficePostCreatedAt;
    readonly modified_at: BackofficePostModifiedAt;

    constructor(
        title: BackofficePostTitle,
        meta_description: BackofficePostMetaDescription,
        description: BackofficePostDescription,
        image: BackofficePostImage,
        status: BackofficePostStatus,
        published: BackofficePostPublished,
        publish_at: BackofficePostPublishAt,
        created_at: BackofficePostCreatedAt
    ) {
        super();
        this.title = title;
        this.meta_description = meta_description;
        this.description = description;
        this.image = image;
        this.status = status;
        this.published = published;
        this.publish_at = publish_at;
        this.created_at = created_at;
    }

    static create(
        title: string,
        meta_description: string,
        description: string,
        image: string,
        status: boolean,
        published: boolean,
        publish_at: number,
        created_at: number
    ) {
        return new BackofficePost(
            new BackofficePostTitle(title),
            new BackofficePostMetaDescription(meta_description),
            new BackofficePostDescription(description),
            new BackofficePostImage(image),
            new BackofficePostStatus(status),
            new BackofficePostPublished(published),
            new BackofficePostPublishAt(publish_at),
            new BackofficePostCreatedAt(created_at)
        )
    }

    static fromPrimitives(
        title: string,
        meta_description: string,
        description: string,
        image: string,
        status: boolean,
        published: boolean,
        publish_at: number,
        created_at: number
    ) {
        return new BackofficePost(
            new BackofficePostTitle(title),
            new BackofficePostMetaDescription(meta_description),
            new BackofficePostDescription(description),
            new BackofficePostImage(image),
            new BackofficePostStatus(status),
            new BackofficePostPublished(published),
            new BackofficePostPublishAt(publish_at),
            new BackofficePostCreatedAt(created_at)
        )
    }

    toPrimitives() {
        return {
            title: this.title.value,
            meta_description: this.meta_description.value,
            description: this.description.value,
            image: this.image.value,
            status: this.status.value,
            published: this.published.value,
            publish_at: this.publish_at.value,
            created_at: this.created_at.value
        }
    }
}

export class BackofficeComment {
    readonly created_by: Customer;
    readonly content: string;
    readonly status: "active" | "banned";
    readonly created_at?: number;
    readonly modified_at?: number;
}
