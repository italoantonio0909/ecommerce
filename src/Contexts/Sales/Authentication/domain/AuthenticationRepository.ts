
import { AuthenticationExpiresIn } from './AuthenticationExpiresIn';
import { AuthenticationIdToken } from './AuthenticationIdToken';

export interface AuthenticationRepository {
    signIn(idToken: AuthenticationIdToken, expiresIn: AuthenticationExpiresIn,): Promise<string>;
}