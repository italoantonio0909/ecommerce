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
    id: CategoryId,
    name: CategoryName,
    description: CategoryDescription,
    is_public: CategoryStatus,
    created_at: CategoryCreatedAt
  ): Category {

    return new Category(id, name, description, is_public, created_at);

  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      description: this.description.value,
      is_public: this.is_public.value,
      created_at: this.created_at.value
    }
  }
}
