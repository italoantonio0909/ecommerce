import { BackofficeSubscriber } from './BackofficeSubscriber';
import { Paginate } from '../../Shared/domain/Paginate';

export interface BackofficeSubscribersRepository {
  paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeSubscriber>>;
  save(subscriber: BackofficeSubscriber): Promise<void>;
  update(uid: string, subscriber: Partial<BackofficeSubscriber>): Promise<void>;
  delete(uid: string): Promise<void>;
  find(email: string): Promise<BackofficeSubscriber>;
  total(): Promise<{ subscribersTotal: number }>;
}
