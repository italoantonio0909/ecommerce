import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { PartnerSaveController } from '../controllers/PartnerSaveController';

export const register = (router: Router) => {

    const saveController = container.get<PartnerSaveController>('Backoffice.partner.PartnerSaveController');
    router.post("/api/backoffice/partner", (req: Request, resp: Response) => saveController.run(req, resp));
}