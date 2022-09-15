import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';
import { BackofficeSubscriber } from '../../domain/BackofficeSubscriber';
import { Paginate } from '../../../../Shared/domain/Paginate';

export class BackOfficeSubscribersPaginate {
    constructor(private repository: BackofficeSubscribersRepository) { }

    async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeSubscriber>> {
        return await this.repository.paginate(limitOfDocuments, page);
    }
}
