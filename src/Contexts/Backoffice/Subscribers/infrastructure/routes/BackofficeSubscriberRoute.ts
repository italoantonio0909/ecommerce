import { Router } from 'express';
import container from '../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    // const saveController = container.get('Backoffice.Subscribers.BackofficeSubscriberSaveController');
    // router.post("/api/backoffice/subscribers", saveController.run.bind(saveController));

    // const updateController = container.get('Backoffice.Subscribers.BackofficeSubscriberUpdateController');
    // router.put("/api/backoffice/subscribers/:subscriberId", updateController.run.bind(updateController));

    // const deleteController = container.get('Backoffice.Subscribers.BackofficeSubscriberDeleteController');
    // router.delete("/api/backoffice/subscribers/:subscriberId", deleteController.run.bind(deleteController));

    // const paginateController = container.get('Backoffice.Subscribers.BackofficeSubscriberPaginateController');
    // router.get("/api/backoffice/subscribers/paginate/:limit/:page", paginateController.run.bind(paginateController));

    // const totalController = container.get('Backoffice.Subscribers.BackofficeSubscriberTotalController');
    // router.get("/api/backoffice/subscribers/total", totalController.run.bind(totalController));
}