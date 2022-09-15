import { BackofficeCategoryName } from './BackofficeCategoryName';
import { BackofficeCategoryDescription } from './BackofficeCategoryDescription';
import { BackofficeCategoryImage } from './BackofficeCategoryImage';
import { BackofficeCategoryCreatedAt } from './BackofficeCategoryCreatedAt';
import { BackofficeCategoryModifiedAt } from './BackofficeCategoryModifiedAt';
import { BackofficeCategoryStatus } from './BackofficeCategoryStatus';
import { BackofficeCategoryId } from './BackofficeCategoryId';
import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot';

export class BackofficeCategory extends AggregateRoot {
  readonly id: BackofficeCategoryId;
  readonly name: BackofficeCategoryName;
  readonly description: BackofficeCategoryDescription;
  readonly image: BackofficeCategoryImage;
  readonly is_public: BackofficeCategoryStatus;
  readonly created_at: BackofficeCategoryCreatedAt;
  readonly modified_at: BackofficeCategoryModifiedAt;

  constructor(
    name: BackofficeCategoryName,
    description: BackofficeCategoryDescription,
    image: BackofficeCategoryImage,
    is_public: BackofficeCategoryStatus,
    created_at: BackofficeCategoryModifiedAt) {
    super();
    this.name = name;
    this.description = description;
    this.image = image;
    this.is_public = is_public;
    this.created_at = created_at;
  }

  static create(
    name: string,
    description: string,
    image: string,
    is_public: boolean,
    created_at: number
  ): BackofficeCategory {

    const backofficeCategory = new BackofficeCategory(
      new BackofficeCategoryName(name),
      new BackofficeCategoryDescription(description),
      new BackofficeCategoryImage(image),
      new BackofficeCategoryStatus(is_public),
      new BackofficeCategoryCreatedAt(created_at)
    );

    return backofficeCategory
  }

  toPrimitives() {
    return {
      name: this.name.value,
      description: this.description.value,
      image: this.image.value,
      is_public: this.is_public.value,
      created_at: this.created_at.value
    }
  }
}
