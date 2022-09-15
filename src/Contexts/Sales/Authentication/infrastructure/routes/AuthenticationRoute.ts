import { Router } from 'express';
import container from '../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const signInController = container.get('Sales.authentication.AuthenticationSignInController');
    router.post("/api/auth/create-cookie-session", signInController.run.bind(signInController));

    const signOutController = container.get('Sales.authentication.AuthenticationSignOutController');
    router.post("/api/auth/logout", signOutController.run.bind(signOutController));
}