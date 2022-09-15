import { Router } from 'express';
import container from '../../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const createController = container.get('Backoffice.blog.postCategory.infrastructure.BackofficePostCategorySaveController');

    router.post("/api/blog/post/category", createController.run.bind(createController));
}