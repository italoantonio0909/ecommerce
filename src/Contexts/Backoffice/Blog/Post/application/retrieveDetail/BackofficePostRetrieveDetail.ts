import { BackofficePost } from '../../domain/BackofficePost';
import { BackofficePostRepository } from '../../domain/BackofficePostRepository';

export class BackofficePostRetrieveDetail {
    private repository: BackofficePostRepository;


    constructor(repository: BackofficePostRepository) {
        this.repository = repository;
    }

    async retrieveDetail(uid: string): Promise<BackofficePost> {
        return await this.repository.retrieveDetail(uid);
    }
}