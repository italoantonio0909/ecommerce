import { SubscriberAlreadyExists } from '../../domain/SubscriberAlreadyExists';
import { Subscriber } from '../../domain/Subscriber';
import { SubscriberRepository } from '../../domain/SubscribersRepository';
import { EventBus } from '../../../../Shared/domain/EventBus';
import { SubscriberEmail } from '../../domain/SubscriberEmail';
import { SubscriberStatus } from '../../domain/SubscriberStatus';
import { SubscriberCreatedAt } from '../../domain/SubscriberCreatedAt';
import { SubscriberId } from '../../domain/SubscriberId';

type Params = {
    id: SubscriberId;
    email: SubscriberEmail;
    status: SubscriberStatus;
    created_at: SubscriberCreatedAt;
}

export class SubscriberSave {

    constructor(private repository: SubscriberRepository, private eventBus: EventBus) { };

    async run({ id, email, status, created_at }: Params): Promise<void> {
        const subscriberFinded = await this.repository.find(email.value.trim());

        if (subscriberFinded !== null) {
            throw new SubscriberAlreadyExists(email.value.trim());
        }

        const subscriber = Subscriber.create(id, email, status, created_at);

        await this.repository.save(subscriber);
        await this.eventBus.publish(subscriber.pullDomainEvents());
    }
}
