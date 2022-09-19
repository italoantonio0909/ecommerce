import { Basket } from '../../domain/Basket';
import { BasketRepository } from '../../domain/BasketRepository';
import { EventBus } from '../../../../Shared/domain/EventBus';
import { BasketId } from '../../domain/BasketId';
import { Customer } from '../../../Customers/domain/Customer';
import { BasketStatus } from '../../domain/BasketStatus';
import { BasketCreatedAt } from '../../domain/BasketCreatedAt';

export class BasketSave {
    constructor(private repository: BasketRepository, private eventBus: EventBus) { }

    async run(id: BasketId, owner: Customer, status: BasketStatus, created_at: BasketCreatedAt): Promise<void> {
        const basket = Basket.create(id, owner, status, created_at);

        await this.repository.save(basket);
        await this.eventBus.publish(basket.pullDomainEvents());
    }
}