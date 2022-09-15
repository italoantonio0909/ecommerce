import { AuthenticationRepository } from '../../domain/AuthenticationRepository';
import { AuthenticationIdToken } from '../../domain/AuthenticationIdToken';
import { AuthenticationExpiresIn } from '../../domain/AuthenticationExpiresIn';
import { auth } from '../../../../../apps/Sales/database';

export class AuthenticationWebApiClient implements AuthenticationRepository {

  async signIn(idToken: AuthenticationIdToken, expiresIn: AuthenticationExpiresIn): Promise<any> {
  }
}
