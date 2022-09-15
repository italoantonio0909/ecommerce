
import { BackofficePostRepository } from '../../domain/BackofficePostRepository';

export class BackofficePostPublish {
    private repository: BackofficePostRepository;

    constructor(repository: BackofficePostRepository) {
        this.repository = repository;
    }

    async publish(uid: string): Promise<any> {

        return await this.repository.publish(uid);
    }
}