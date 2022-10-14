import { Request, Response, Router } from 'express';
import container from '../dependency-injection';
import { SubscriberSaveController } from '../controllers/SubscriberSaveController';

export const register = (router: Router) => {

    const saveController = container.get<SubscriberSaveController>('Sales.subscribers.SubscriberSaveController');
    router.post("/api/subscribers", (req: Request, res: Response) => saveController.run(req, res));
}