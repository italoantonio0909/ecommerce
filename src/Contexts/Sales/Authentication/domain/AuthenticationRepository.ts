
import { AuthenticationExpiresIn } from './AuthenticationExpiresIn';
import { AuthenticationIdToken } from './AuthenticationIdToken';

export interface AuthenticationRepository {
    createCookieSession(idToken: AuthenticationIdToken, expiresIn: AuthenticationExpiresIn,): Promise<string>;
}