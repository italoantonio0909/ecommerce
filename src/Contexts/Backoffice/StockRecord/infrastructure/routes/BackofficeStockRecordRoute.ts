import { Router } from 'express';
import container from '../../../../../../apps/backend/dependency-injection';

export const register = (router: Router) => {

    const saveController = container.get('Backoffice.Partner.StockRecord.BackofficeStockRecordSaveController');
    router.post("/api/backoffice/stock-record", saveController.run.bind(saveController));
}