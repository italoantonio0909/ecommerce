import { CategoryRepository } from '../../domain/CategoryRepository';
import { CategoryName } from '../../domain/CategoryName';
import { CategoryDescription } from '../../domain/CategoryDescription';
import { CategoryStatus } from '../../domain/CategoryStatus';
import { CategoryCreatedAt } from '../../domain/CategoryCreatedAt';
import { CategoryAlreadyExists } from '../../domain/CategoryAlreadyExists';
import { Category } from '../../domain/Category';
import { CategoryId } from '../../domain/CategoryId';

export class CategorySave {
  constructor(private repository: CategoryRepository) { }

  async run({ id, name, description, is_public, created_at }: { id: CategoryId, name: CategoryName, description: CategoryDescription, is_public: CategoryStatus, created_at: CategoryCreatedAt }): Promise<void> {

    const categoryExist = await this.repository.search(name.value);

    if (categoryExist !== null) {
      throw new CategoryAlreadyExists(name.value);
    }

    const category = Category.create(id, name, description, is_public, created_at);

    return await this.repository.save(category);
  }
}