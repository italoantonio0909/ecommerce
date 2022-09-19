import { AggregateRoot } from "../../../Shared/domain/AggregateRoot";
import { Customer } from '../../Customers/domain/Customer';
import { Basket } from '../../Basket/domain/Basket';

export class Order extends AggregateRoot {

    private owner: Customer;
    private basket: Basket;

    constructor(owner: Customer, basket: Basket) {
        super();
        this.basket = basket;
        this.owner = owner;
    }

    toPrimitives() {
        return {
            owner: this.owner,
            basket: this.basket
        }
    }
}