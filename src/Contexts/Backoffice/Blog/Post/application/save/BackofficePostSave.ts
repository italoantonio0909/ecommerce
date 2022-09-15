import { BackofficePostRepository } from '../../domain/BackofficePostRepository';
import { BackofficePost } from '../../domain/BackofficePost';

export class BackofficePostSave {

    constructor(private repository: BackofficePostRepository) { }

    async create(title: string, meta_description: string, description: string, status: boolean, image: string, published: boolean): Promise<void> {

        const transactionTime = new Date().getTime();

        const post = BackofficePost.create(
            title,
            meta_description,
            image,
            description,
            status,
            published,
            transactionTime,
            transactionTime
        );

        return await this.repository.save(post);
    }
}