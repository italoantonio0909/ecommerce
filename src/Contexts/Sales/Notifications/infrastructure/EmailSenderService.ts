import { EmailSender } from "../domain/EmailSender";
import { Email } from '../domain/Email';

export class EmailSenderService implements EmailSender {
    async send(email: Email) {
        console.log("enviando email subscriber")
        console.log({ email })
    }
}