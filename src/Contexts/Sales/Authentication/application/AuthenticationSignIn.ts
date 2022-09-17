import { AuthenticationRepository } from '../domain/AuthenticationRepository';
import { Authentication } from '../domain/Authentication';
import { AuthenticationForbidden } from '../domain/AuthenticationForbidden';
import { AuthenticationIdToken } from '../domain/AuthenticationIdToken';
import { AuthenticationCsrfToken } from '../domain/AuthenticationCsrfToken';
import { AuthenticationCookieCsrfToken } from '../domain/AuthenticationCookieCsrfToken';
import { AuthenticationEmail } from '../domain/AuthenticationEmail';
import { AuthenticationExpiresIn } from '../domain/AuthenticationExpiresIn';
import { EventBus } from '../../../Shared/domain/EventBus';

export class AuthenticationSignIn {
    constructor(private repository: AuthenticationRepository, private eventBus: EventBus) { }

    async signIn(
        idToken: AuthenticationIdToken,
        csrfToken: AuthenticationCsrfToken,
        cookieCsrfToken: AuthenticationCookieCsrfToken,
        email: AuthenticationEmail): Promise<string> {

        // if (csrfToken !== cookieCsrfToken) {
        //     throw new AuthenticationForbidden();
        // }

        const expiresIn = new AuthenticationExpiresIn(60 * 60 * 24 * 5 * 1000);
        const auth = Authentication.create(idToken, expiresIn, cookieCsrfToken, csrfToken, email);

        const sessionCookie = await this.repository.signIn(
            auth.idToken,
            auth.expiresIn,
            auth.csrfToken,
            auth.cookieCsrfToken,
            auth.email
        );

        await this.eventBus.publish(auth.pullDomainEvents());

        return sessionCookie;
    }
}