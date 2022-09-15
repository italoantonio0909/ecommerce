import { AuthenticationExpiresIn } from './AuthenticationExpiresIn';
import { AuthenticationIdToken } from './AuthenticationIdToken';
import { AuthenticationCsrfToken } from './AuthenticationCsrfToken';
import { AuthenticationCookieCsrfToken } from './AuthenticationCookieCsrfToken';

export class Authentication {
    idToken: AuthenticationIdToken;
    expiresIn: AuthenticationExpiresIn;
    csrfToken: AuthenticationCsrfToken;
    cookieCsrfToken: AuthenticationCookieCsrfToken;

    constructor(idToken: AuthenticationIdToken, expiresIn: AuthenticationExpiresIn, csrfToken: AuthenticationCsrfToken, cookieCsrfToken: AuthenticationCookieCsrfToken) {
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.csrfToken = csrfToken;
        this.cookieCsrfToken = cookieCsrfToken;
    }

    static create(idToken: string, expiresIn: number, csrfToken: string, cookieCsrfToken: string): Authentication {
        return new Authentication(
            new AuthenticationIdToken(idToken),
            new AuthenticationExpiresIn(expiresIn),
            new AuthenticationCsrfToken(csrfToken),
            new AuthenticationCookieCsrfToken(cookieCsrfToken)
        )
    }
}