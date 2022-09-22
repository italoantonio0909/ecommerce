import { CategoryName } from './CategoryName';
import { CategoryDescription } from './CategoryDescription';
import { CategoryImage } from './CategoryImage';
import { CategoryCreatedAt } from './CategoryCreatedAt';
import { CategoryModifiedAt } from './CategoryModifiedAt';
import { CategoryStatus } from './CategoryStatus';
import { CategoryId } from './CategoryId';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class Category extends AggregateRoot {
  readonly id: CategoryId;
  readonly name: CategoryName;
  readonly description: CategoryDescription;
  readonly image: CategoryImage;
  readonly is_public: CategoryStatus;
  readonly created_at: CategoryCreatedAt;
  readonly modified_at: CategoryModifiedAt;

  constructor(
    id: CategoryId,
    name: CategoryName,
    description: CategoryDescription,
    is_public: CategoryStatus,
    created_at: CategoryCreatedAt
  ) {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.is_public = is_public;
    this.created_at = created_at;
  }

  static create(
    id: string,
    name: string,
    description: string,
    is_public: boolean,
    created_at: Date
  ): Category {

    return new Category(
      new CategoryId(id),
      new CategoryName(name),
      new CategoryDescription(description),
      new CategoryStatus(is_public),
      new CategoryCreatedAt(created_at)
    );

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
