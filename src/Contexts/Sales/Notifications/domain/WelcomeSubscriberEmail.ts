import { Email } from './Email';
import { EmailAddress } from './EmailAddress';
import { EmailBody } from './EmailBody';
import { EmailSubject } from './EmailSubject';

export class WelcomeSubscriberEmail extends Email {
    constructor(to: EmailAddress) {
        super({
            from: new EmailAddress('italo.barzola@links.com'),
            to,
            subject: new EmailSubject('Welcome'),
            body: new EmailBody('Welcome to our platform')
        });
    }
}