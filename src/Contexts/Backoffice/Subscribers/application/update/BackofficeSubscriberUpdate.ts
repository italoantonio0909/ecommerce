import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';
import { BackofficeSubscriber } from '../../domain/BackofficeSubscriber';

export class BackofficeSubscriberUpdate {
    constructor(private repository: BackofficeSubscribersRepository) { }

    async update(uid: string, subscriber: Partial<BackofficeSubscriber>): Promise<void> {
        // const data = {
        //     ...subscriber!,
        //     modified_at: new Date().getTime()
        // }
        // return await this.repository.update(uid, data)
    }
}
