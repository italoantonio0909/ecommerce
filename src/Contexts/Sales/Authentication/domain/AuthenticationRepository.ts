import { AuthenticationExpiresIn } from './AuthenticationExpiresIn';
import { AuthenticationIdToken } from './AuthenticationIdToken';
import { AuthenticationCsrfToken } from './AuthenticationCsrfToken';
import { AuthenticationCookieCsrfToken } from './AuthenticationCookieCsrfToken';

export interface AuthenticationRepository {
    signIn(
        idToken: AuthenticationIdToken,
        expiresIn: AuthenticationExpiresIn,
        csrfToken: AuthenticationCsrfToken,
        cookieCsrfToken: AuthenticationCookieCsrfToken
    ): Promise<string>;
}