import { Comment, Post } from './Blog';
import { Paginate } from '../../../Shared/domain/Paginate';

export interface BlogRepository {
  paginate(limitOfDocuments: number, page: number): Promise<Paginate<Post>>

  retrieveDetail(postUid: string): Promise<Post>;

  addComment(postUid: string, comment: Comment): Promise<Post>;
}
