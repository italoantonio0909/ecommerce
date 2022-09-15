import { SubscriberAlreadyExists } from '../../domain/SubscriberAlreadyExists';
import { Subscriber } from '../../domain/Subscriber';
import { SubscriberRepository } from '../../domain/SubscribersRepository';
import { EventBus } from '../../../../Shared/domain/EventBus';
import { SubscriberEmail } from '../../domain/SubscriberEmail';
import { SubscriberStatus } from '../../domain/SubscriberStatus';
import { SubscriberCreatedAt } from '../../domain/SubscriberCreatedAt';

export class SubscriberSave {

    constructor(private repository: SubscriberRepository, private eventBus: EventBus) { };

    async run(email: SubscriberEmail): Promise<void> {
        const subscriberFinded = await this.repository.find(email.value.trim());

        if (subscriberFinded !== null) {
            throw new SubscriberAlreadyExists(email.value.trim());
        }

        const subscriber = Subscriber.create(
            email,
            new SubscriberStatus(true),
            new SubscriberCreatedAt(new Date().getTime())
        );

        await this.repository.save(subscriber);
        await this.eventBus.publish(subscriber.pullDomainEvents());
    }
}
