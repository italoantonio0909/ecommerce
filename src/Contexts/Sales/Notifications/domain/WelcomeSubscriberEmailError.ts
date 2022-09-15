import { EmailAddress } from './EmailAddress';

export class WelcomeSubscriberEmailError extends Error {
    constructor(userEmailAddress: EmailAddress) {
        super(`Error sending Welcome subscriber email to ${userEmailAddress.value}`);
    }
}
