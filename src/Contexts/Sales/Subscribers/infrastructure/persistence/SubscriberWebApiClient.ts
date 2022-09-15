import { Subscriber } from '../../domain/Subscriber';
import { SubscriberRepository } from '../../domain/SubscribersRepository'
import { FirebaseRepository } from '../../../../Shared/infrastructure/persistence/firebase/FirebaseRepository';

export class SubscriberWebApiClient extends FirebaseRepository<Subscriber> implements SubscriberRepository {

  async save(subscriber: Subscriber): Promise<void> {
    await this.persist(subscriber);
  }

  async find(email: string): Promise<Subscriber> {
    const collection = this.collection();
    const ref = collection.where("email", "==", email);

    const snapshot = await ref.get();

    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs[0].data() as Subscriber
  }

  protected moduleName(): string {
    return 'subscribers'
  }

  orderBy() {
    return 'created_at'
  }
}
