import { Router } from 'express';
import { PostPaginateController } from '../controller/paginate/PostPaginateController';
import { PostRetrieveDetailController } from '../controller/retrieveDetail/PostRetrieveDetailController';
import { PostAddCommentController } from '../controller/addComment/PostAddCommentController';
import container from '../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const paginateController = container.get<PostPaginateController>('Sales.post.PostPaginateController');
    router.get("/api/blog/posts/paginate/:limit/:page", paginateController.run.bind(paginateController));

    const retrieveDetailController = container.get<PostRetrieveDetailController>('Sales.post.PostRetrieveDetailController');
    router.get("/api/blog/retrieve-post/:postUid", retrieveDetailController.run.bind(retrieveDetailController));

    const addCommentController = container.get<PostAddCommentController>('Sales.post.PostAddCommentController');
    router.get("/api/blog/posts/add-comment/:postUid", addCommentController.run.bind(addCommentController));

}