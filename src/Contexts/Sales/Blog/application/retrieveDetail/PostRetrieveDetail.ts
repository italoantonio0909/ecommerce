import { Post } from '../../domain/Blog';
import { BlogRepository } from '../../domain/BlogRepository';

export class PostRetrieveDetail {
  constructor(
    private repository: BlogRepository
  ) { }

  async retrieveDetail(postUid: string): Promise<Post> {
    return await this.repository.retrieveDetail(postUid)
  }

}
