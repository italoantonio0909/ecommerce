import { Server } from "./server";
// import { EventBus } from '../../Contexts/Shared/domain/EventBus';
// import { DomainEvent } from '../../Contexts/Shared/domain/DomainEvent';
// import { DomainEventSubscriber } from '../../Contexts/Shared/domain/DomainEventSubscriber';
// import { DomainEventMapping } from '../../Contexts/Shared/infrastructure/EventBus/DomainEventMapping';
// import { Definition } from "node-dependency-injection";
// import container from './dependency-injection/index';

export class BackofficeBackendApp {
    server?: Server;

    async start() {
        const port = process.env.PORT || '5000';
        this.server = new Server(port);
        await this.registerSubscribers();
        return this.server.listen();
    }

    private async registerSubscribers() {
        // const eventBus = container.get<EventBus>('Shared.EventBus');
        // const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber') as Map<String, Definition>;
        // const subscribers: Array<DomainEventSubscriber<DomainEvent>> = [];

        // subscriberDefinitions.forEach((value: any, key: any) => subscribers.push(container.get(key)));
        // const domainEventMapping = new DomainEventMapping(subscribers);

        // eventBus.setDomainEventMapping(domainEventMapping);
        // eventBus.addSubscribers(subscribers);
        // await eventBus.start();
    }
}