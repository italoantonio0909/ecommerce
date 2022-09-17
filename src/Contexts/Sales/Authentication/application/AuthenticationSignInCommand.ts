import { Command } from '../../../Shared/domain/Command';

export class AuthenticationSignInCommand extends Command {
    idToken: string;
    csrfToken: string;
    cookieCsrfToken: string;
    email: string;

    constructor({ idToken, csrfToken, cookieCsrfToken, email }: { idToken: string, csrfToken: string, cookieCsrfToken: string; email: string }) {
        super();
        this.idToken = idToken
        this.csrfToken = csrfToken;
        this.cookieCsrfToken = cookieCsrfToken;
        this.email = email;
    }
}