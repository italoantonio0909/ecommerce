import { BlogRepository } from '../../domain/BlogRepository';
import { Comment, Post } from '../../domain/Blog';

export class PostAddComment {
  constructor(
    private repository: BlogRepository
  ) { }

  async addComment(postUid: string, comment: Comment): Promise<any> {

    const { content, created_by } = comment;

    const data = Post.addComment(
      created_by,
      content,
      "active",
      new Date().getTime()
    );

    return await this.repository.addComment(postUid, data);
  }
}
