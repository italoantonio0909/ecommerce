import { BackofficeCategoryRepository } from '../../domain/CategoryRepository';
import { BackofficeCategory } from '../../domain/Category';
import { BackofficeCategoryAlreadyExists } from '../../domain/CategoryAlreadyExists';

export class BackofficeCategorySave {
  constructor(
    private readonly repository: BackofficeCategoryRepository
  ) { }

  async create(name: string, description: string, image: string, is_public: boolean): Promise<void> {

    const categoryExist = await this.repository.search(name.trim());

    if (categoryExist !== null) {
      throw new BackofficeCategoryAlreadyExists(name.trim());
    }

    const transaction = new Date().getTime();
    const data = BackofficeCategory.create(
      name,
      description,
      image,
      is_public,
      transaction
    );

    return await this.repository.create(data);
  }
}