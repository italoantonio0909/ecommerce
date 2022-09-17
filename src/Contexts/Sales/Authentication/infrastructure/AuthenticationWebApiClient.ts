import { AuthenticationRepository } from '../domain/AuthenticationRepository';
import { auth } from '../../../../apps/Sales/database';
import { AuthenticationIdToken } from '../domain/AuthenticationIdToken';
import { AuthenticationExpiresIn } from '../domain/AuthenticationExpiresIn';

export class SignInWebApiClient implements AuthenticationRepository {

    async createCookieSession(idToken: AuthenticationIdToken, expiresIn: AuthenticationExpiresIn): Promise<string> {

        return await auth.createSessionCookie(idToken.value, { expiresIn: expiresIn.value });
    }
}