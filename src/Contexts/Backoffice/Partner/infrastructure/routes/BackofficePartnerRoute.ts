import { Router } from 'express';
import container from '../../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const saveController = container.get('Backoffice.Partner.Partner.BackofficePartnerSaveController');
    router.post("/api/backoffice/partner", saveController.run.bind(saveController));
}