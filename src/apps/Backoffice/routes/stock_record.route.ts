import { Router, Response, Request } from 'express';
import container from '../dependency-injection';
import { StockRecordSaveController } from '../controllers/StockRecordSaveController';

export const register = (router: Router) => {

    const saveController = container.get<StockRecordSaveController>('Backoffice.stockRecord.StockRecordSaveController');
    router.post("/api/backoffice/stock-record", (req: Request, resp: Response) => saveController.run(req, resp));

}