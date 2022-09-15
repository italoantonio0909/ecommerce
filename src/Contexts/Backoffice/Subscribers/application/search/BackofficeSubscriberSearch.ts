import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';
import { BackofficeSubscriber } from '../../domain/BackofficeSubscriber';

export class BackofficeSubscriberSearch {
    constructor(private repository: BackofficeSubscribersRepository) { }

    async search(email: string): Promise<BackofficeSubscriber> {
        return await this.repository.find(email)
    }
}
