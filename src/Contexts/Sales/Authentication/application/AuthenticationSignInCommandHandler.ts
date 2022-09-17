import { CommandHandler } from '../../../Shared/domain/CommandHandler';
import { Command } from '../../../Shared/domain/Command';
import { AuthenticationSignIn } from './AuthenticationSignIn';
import { AuthenticationIdToken } from '../domain/AuthenticationIdToken';
import { AuthenticationCsrfToken } from '../domain/AuthenticationCsrfToken';
import { AuthenticationCookieCsrfToken } from '../domain/AuthenticationCookieCsrfToken';
import { AuthenticationEmail } from '../domain/AuthenticationEmail';
import { AuthenticationSignInCommand } from './AuthenticationSignInCommand';

export class AuthenticationSignInCommandHandler implements CommandHandler<AuthenticationSignInCommand>{
    constructor(private authentication: AuthenticationSignIn) { }

    subscribedTo(): Command {
        return AuthenticationSignInCommand;
    }

    async handle(command: AuthenticationSignInCommand): Promise<void> {
        const idToken = new AuthenticationIdToken(command.idToken);
        const csrfToken = new AuthenticationCsrfToken(command.csrfToken);
        const cookieCsrfToken = new AuthenticationCookieCsrfToken(command.cookieCsrfToken);
        const email = new AuthenticationEmail(command.email);

        await this.authentication.run(idToken, csrfToken, cookieCsrfToken, email);
    }
}