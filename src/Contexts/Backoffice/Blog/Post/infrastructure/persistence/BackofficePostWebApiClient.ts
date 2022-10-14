import { BackofficePost } from '../../domain/BackofficePost';
import { BackofficePostRepository } from '../../domain/BackofficePostRepository';
import { Paginate } from '../../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../../Shared/infrastructure/persistence/FirebaseRepository';

export class BackofficePostWebApiClient extends FirebaseRepository<BackofficePost> implements BackofficePostRepository {

    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficePost>> {

        return await this.paginated(limitOfDocuments, page);
    }

    async save(post: BackofficePost): Promise<void> {
        await this.persist(post);
    }

    async publish(uid: string): Promise<any> {
        const ref = this.collection().doc(uid);

        await ref.update({ "published": true });
    }


    async retrieveDetail(postUid: string): Promise<BackofficePost> {
        const ref = this.collection().doc(postUid);

        const snapshot = await ref.get();

        if (!snapshot.exists) {
            return null;
        }

        const post = snapshot.data() as BackofficePost;

        // const post: BackofficePost = {
        //     ...snapshot.data() as BackofficePost,
        //     // id: snapshot.id
        // }

        return post
    }

    moduleName(): string {
        return 'post';
    }

    orderBy(): string {
        return 'created_at';
    }
}
