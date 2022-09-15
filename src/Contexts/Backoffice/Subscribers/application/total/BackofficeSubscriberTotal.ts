import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';

export class BackofficeSubscriberTotal {
    constructor(private repository: BackofficeSubscribersRepository) { }

    async total(): Promise<{ subscribersTotal: number }> {
        return await this.repository.total()
    }
}
