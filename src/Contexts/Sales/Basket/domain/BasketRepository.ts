import { Basket } from "./Basket";

export interface BasketRepository {
    save(basket: Basket): Promise<void>;
    // add_product(product: Product, quantity: number): Promise<any>;
}