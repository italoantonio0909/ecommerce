import { DomainEventSubscriber } from '../../../../Shared/domain/DomainEventSubscriber';
import { CustomerSavedDomainEvent } from '../../../Customers/domain/CustomerSavedDomainEvent';
import { DomainEventClass } from '../../../../Shared/domain/DomainEvent';
import { SendWelcomeCustomer } from './SendWelcomeCustomer';
import Logger from '../../../../Shared/domain/Logger';
import { EmailAddress } from '../../domain/EmailAddress';

export class SendWelcomeCustomerOnCustomerSaved implements DomainEventSubscriber<CustomerSavedDomainEvent>{
    constructor(private subscriberSendWelcomeEmail: SendWelcomeCustomer, private logger: Logger) { }

    subscribedTo(): Array<DomainEventClass> {
        return [CustomerSavedDomainEvent]
    }

    async on(domainEvent: CustomerSavedDomainEvent): Promise<void> {
        const email = new EmailAddress(domainEvent.email);
        await this.subscriberSendWelcomeEmail.run(email);
        this.logger.info('Send welcome customer on customer saved');
    }
}