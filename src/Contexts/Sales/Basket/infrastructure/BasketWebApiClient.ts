import { FirebaseRepository } from "../../../Shared/infrastructure/persistence/FirebaseRepository";
import { Basket } from '../domain/Basket';
import { BasketRepository } from '../domain/BasketRepository';

export class BasketWebApiClient extends FirebaseRepository<Basket> implements BasketRepository {

    async save(basket: Basket): Promise<void> {
        await this.persist(basket);
    }

    moduleName(): string { return 'basket' }
}