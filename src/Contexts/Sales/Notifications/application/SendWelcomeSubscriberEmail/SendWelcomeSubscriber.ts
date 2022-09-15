import { EmailSender } from "../../domain/EmailSender";
import { EmailAddress } from '../../domain/EmailAddress';
import { WelcomeSubscriberEmail } from '../../domain/WelcomeSubscriberEmail';
import { WelcomeSubscriberEmailError } from "../../domain/WelcomeSubscriberEmailError";

export class SendWelcomeSubscriber {
    constructor(private emailSender: EmailSender) { }

    async run(subscriberEmailAddress: EmailAddress) {
        const subscriberWelcome = new WelcomeSubscriberEmail(subscriberEmailAddress);

        try {
            await this.emailSender.send(subscriberWelcome);
        } catch (error) {
            throw new WelcomeSubscriberEmailError(subscriberEmailAddress);
        }
    }
}