import { BlogRepository } from '../../domain/BlogRepository';
import { Comment, Post } from '../../domain/Blog';
import admin from 'firebase-admin';
import { Paginate } from '../../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../Shared/infrastructure/persistence/firebase/FirebaseRepository';


export class BlogWebApiClient extends FirebaseRepository<Post> implements BlogRepository {

  async paginate(limitOfDocuments: number, page: number): Promise<Paginate<Post>> {
    return await this.paginated(limitOfDocuments, page);

  }

  async addComment(postUid: string, comment: Comment): Promise<any> {
    const { content, created_by, status, created_at } = comment;

    const ref = this.collection().doc(postUid);

    const post = await ref.get();

    if (post.exists) {
      return null;
    }

    const { number_comments } = post.data() as Post;

    const data = [{ content, created_by, status, created_at }];

    const postUpdate = {
      comment: admin.firestore.FieldValue.arrayUnion(...data),
      number_comments: number_comments + 1
    }

    return await ref.update(postUpdate);
  }


  async retrieveDetail(postUid: string): Promise<Post> {
    const ref = this.collection().doc(postUid);

    const snapshot = await ref.get();

    const post = snapshot.data() as Post;

    if (snapshot.exists) {
      // const post: Post = {
      //   ...snapshot.data() as Post,
      //   id: snapshot.id
      // }

      return post
    }
  }

  moduleName(): string {
    return 'post'
  }

  orderBy(): string {
    return 'created_at'
  }
}
