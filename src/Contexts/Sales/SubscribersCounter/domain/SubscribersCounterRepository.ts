
export interface SubscribersCounterRepository {
    search(): Promise<CustomersCounter>;

    save(counter: CustomersCounter): Promise<void>;
}