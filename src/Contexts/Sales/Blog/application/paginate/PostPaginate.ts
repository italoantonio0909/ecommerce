import { BlogRepository } from '../../domain/BlogRepository';
import { Post } from '../../domain/Blog';
import { Paginate } from '../../../../Shared/domain/Paginate';

export class PostPaginate {
  constructor(
    private repository: BlogRepository
  ) { }

  async paginate(limitOfDocuments: number, page: number): Promise<Paginate<Post>> {
    return await this.repository.paginate(limitOfDocuments, page);
  }
}
