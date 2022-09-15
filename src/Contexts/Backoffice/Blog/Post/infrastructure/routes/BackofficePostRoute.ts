import { Router } from 'express';
import container from '../../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const createController = container.get('Backoffice.blog.post.BackofficePostSaveController');
    router.post("/api/backoffice/blog/post", createController.run.bind(createController));

    const retrieveDetailController = container.get('Backoffice.blog.post.infrastructure.BackofficePostRetrieveDetailController');
    router.get("/api/backoffice/blog/post/retrieve/:uid", retrieveDetailController.run.bind(retrieveDetailController));

    const paginateController = container.get('Backoffice.blog.post.infrastructure.BackofficePostPaginateController');
    router.get("/api/backoffice/blog/post/paginate/:limit/:page", paginateController.run.bind(paginateController))

    const publishController = container.get('Backoffice.blog.post.infrastructure.BackofficePostPublishController');
    router.post("/api/backoffice/blog/post/publish/:uid", publishController.run.bind(publishController));
}