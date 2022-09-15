import { AuthenticationRepository } from '../../domain/AuthenticationRepository';
import { Authentication } from '../../domain/Authentication';
import { AuthenticationForbidden } from '../../domain/AuthenticationForbidden';

export class AuthenticationSignIn {
    constructor(private repository: AuthenticationRepository) { }

    async signIn(idToken: string, csrfToken: string, cookieCsrfToken: string): Promise<any> {

        if (csrfToken !== cookieCsrfToken) {
            throw new AuthenticationForbidden();
        }

        const expiresIn = 60 * 60 * 24 * 5 * 1000;
        const data = Authentication.create(idToken, expiresIn, cookieCsrfToken, csrfToken);

        return await this.repository.signIn(
            data.idToken,
            data.expiresIn,
            data.csrfToken,
            data.cookieCsrfToken
        );
    }
}