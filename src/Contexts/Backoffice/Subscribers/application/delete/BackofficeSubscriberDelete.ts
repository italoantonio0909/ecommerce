import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';
import { BackofficeSubscriber } from '../../domain/BackofficeSubscriber';

export class BackofficeSubscriberDelete {
    constructor(
        private repository: BackofficeSubscribersRepository
    ) { }

    async delete(uid: string): Promise<void> {
        // return await this.repository.delete(uid);
    }
}
