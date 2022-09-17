import { AuthenticationExpiresIn } from './AuthenticationExpiresIn';
import { AuthenticationIdToken } from './AuthenticationIdToken';
import { AuthenticationCsrfToken } from './AuthenticationCsrfToken';
import { AuthenticationCookieCsrfToken } from './AuthenticationCookieCsrfToken';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { AuthenticationSucessDomainEvent } from './AuthenticationSuccessDomainEvent';
import { AuthenticationEmail } from './AuthenticationEmail';

export class Authentication extends AggregateRoot {
    idToken: AuthenticationIdToken;
    email: AuthenticationEmail;
    expiresIn: AuthenticationExpiresIn;
    csrfToken: AuthenticationCsrfToken;
    cookieCsrfToken: AuthenticationCookieCsrfToken;

    constructor(idToken: AuthenticationIdToken, expiresIn: AuthenticationExpiresIn, csrfToken: AuthenticationCsrfToken, cookieCsrfToken: AuthenticationCookieCsrfToken, email: AuthenticationEmail) {
        super();
        this.idToken = idToken;
        this.expiresIn = expiresIn;
        this.csrfToken = csrfToken;
        this.cookieCsrfToken = cookieCsrfToken;
        this.email = email;
    }

    static create(
        idToken: AuthenticationIdToken,
        expiresIn: AuthenticationExpiresIn,
        csrfToken: AuthenticationCsrfToken,
        cookieCsrfToken: AuthenticationCookieCsrfToken,
        email: AuthenticationEmail): Authentication {

        const auth = new Authentication(idToken, expiresIn, csrfToken, cookieCsrfToken, email);

        auth.record(
            new AuthenticationSucessDomainEvent({ email: email.value })
        );

        return auth;
    }

    toPrimitives() {
        return {
            idToken: this.idToken,
            expiresIn: this.expiresIn,
            csrfToken: this.csrfToken,
            cookieCsrfToken: this.cookieCsrfToken,
            email: this.email
        }
    }
}