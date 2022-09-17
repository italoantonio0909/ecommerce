import { Router, Request, NextFunction, Response } from 'express';
import container from '../../dependency-injection';
import { AuthenticationSignInController } from '../controllers/AuthenticationSignInController';

export const register = (router: Router) => {

    const signInController = container.get<AuthenticationSignInController>('Sales.authentication.AuthenticationSignInController');
    router.post("/api/auth/create-cookie-session", (req: Request, res: Response, next: NextFunction) => signInController.run(req, res, next));
}