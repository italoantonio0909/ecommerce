import { DomainEventSubscriber } from '../../../../Shared/domain/DomainEventSubscriber';
import { DomainEventClass } from '../../../../Shared/domain/DomainEvent';
import { SubscriberSavedDomainEvent } from '../../../Subscribers/domain/SubscriberSavedDomainEvent';
import { EmailAddress } from '../../domain/EmailAddress';
import { SendWelcomeSubscriber } from './SendWelcomeSubscriber';
import Logger from '../../../../Shared/domain/Logger';

export class SendWelcomeSubscribeOnSusbcriberSaved implements DomainEventSubscriber<SubscriberSavedDomainEvent> {
    constructor(private subscriberSendWelcomeEmail: SendWelcomeSubscriber, private logger: Logger) { }

    subscribedTo(): Array<DomainEventClass> {
        return [SubscriberSavedDomainEvent]
    }

    async on(domainEvent: SubscriberSavedDomainEvent): Promise<void> {
        this.logger.info('Send email welcome subscriber on subscriber saved event.')
        const userEmailAddress = new EmailAddress(domainEvent.email);
        await this.subscriberSendWelcomeEmail.run(userEmailAddress);
    }
}