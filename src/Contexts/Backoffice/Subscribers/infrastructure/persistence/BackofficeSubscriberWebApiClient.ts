import { BackofficeSubscriber } from '../../domain/BackofficeSubscriber';
import { BackofficeSubscribersRepository } from '../../domain/BackofficeSubscribersRepository';
import { Paginate } from '../../../../Shared/domain/Paginate';
import { FirebaseRepository } from '../../../../Shared/infrastructure/persistence/firebase/FirebaseRepository';

export class BackofficeSubscriberWebApiClient extends FirebaseRepository<BackofficeSubscriber> implements BackofficeSubscribersRepository {

  async paginate(limitOfDocuments: number, page: number): Promise<Paginate<BackofficeSubscriber>> {

    return await this.paginated(limitOfDocuments, page);
  }

  async save(subscriber: BackofficeSubscriber): Promise<void> {

    await this.persist(subscriber);
  }

  async delete(id: string): Promise<void> {
    const collection = this.collection().doc(id);

    await collection.update({ status: 'inactive' });
  }

  async find(email: string): Promise<BackofficeSubscriber> {
    const ref = this.collection().where('email', '==', email.trim());

    const snapshot = await ref.get();
    if (snapshot.empty) {
      return null;
    }

    return snapshot.docs[0].data() as BackofficeSubscriber
  }

  async update(uid: string, subscriber: Partial<BackofficeSubscriber>): Promise<void> {
    const ref = this.collection().doc(uid);

    await ref.update(subscriber);
  }

  async total(): Promise<{ subscribersTotal: number }> {
    const ref = this.collection().select("_id")

    const snapshot = await ref.get();

    return {
      subscribersTotal: snapshot.size
    }
  }

  moduleName(): string { return 'subscribers'; }

  orderBy(): string { return 'created_at'; };
}
