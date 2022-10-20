import { AggregateRoot } from '../../domain/AggregateRoot';
import firestore from '../../../../apps/Sales/database';

export abstract class FirebaseRepository<T extends AggregateRoot>{
    protected abstract moduleName(): string;

    protected collection() {
        return firestore.collection(this.moduleName());
    }

    protected async persist(aggregateRoot: T) {
        const collection = this.collection().doc(aggregateRoot.toPrimitives().id);
        const document = { ...aggregateRoot.toPrimitives() };
        return await collection.set(document);

    }
}