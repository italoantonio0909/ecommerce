import { BackofficeSubscriberAlreadyExists } from '../../domain/BackofficeSubscriberAlreadyRegistered';
import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';
import { BackofficeSubscriber } from '../../domain/BackofficeSubscriber';

export class BackOfficeSubscriberSave {
    constructor(private repository: BackofficeSubscribersRepository) { }

    async create(email: string): Promise<void> {

        const subscriberExists = await this.repository.find(email.trim());

        if (subscriberExists !== null) {
            throw new BackofficeSubscriberAlreadyExists(email.trim());
        }

        const created_at = new Date().getTime();
        const status = true;
        const subscriber = BackofficeSubscriber.create(email, status, created_at);

        return this.repository.save(subscriber)
    }
}
