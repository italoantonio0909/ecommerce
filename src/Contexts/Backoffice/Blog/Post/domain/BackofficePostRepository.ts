import { BackofficePost } from "./BackofficePost";
import { Paginate } from '../../../../Shared/domain/Paginate';

export interface BackofficePostRepository {
    save(post: BackofficePost): Promise<void>;
    publish(uid: string): Promise<any>;
    retrieveDetail(uid: string): Promise<BackofficePost>;
    paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficePost>>;
}