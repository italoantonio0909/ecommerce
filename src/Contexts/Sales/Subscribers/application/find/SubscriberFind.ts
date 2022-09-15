import { SubscriberRepository } from '../../domain/SubscribersRepository';
import { Subscriber } from '../../domain/Subscriber';

export class SubscriberFind {
    constructor(
        private repository: SubscriberRepository
    ) { }

    async run(email: string): Promise<Subscriber> {
        return await this.repository.find(email);
    }
}
