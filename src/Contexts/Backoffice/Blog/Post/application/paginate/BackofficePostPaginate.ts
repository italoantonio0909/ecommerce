import { BackofficePost } from '../../domain/BackofficePost';
import { BackofficePostRepository } from '../../domain/BackofficePostRepository';
import { Paginate } from '../../../../../Shared/domain/Paginate';

export class BackofficePostPaginate {
  private repository: BackofficePostRepository;

  constructor(repository: BackofficePostRepository) {
    this.repository = repository;
  }

  async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficePost>> {
    return await this.repository.paginate(limitOfDocuments, page);
  }
}
