import { Subscriber } from './Subscriber';

export interface SubscriberRepository {
  save(subscriber: Subscriber): Promise<void>;
  find(email: string): Promise<Subscriber>;
}
