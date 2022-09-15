import { BackofficeStockRecord } from './BackofficeStockRecord';

export interface BackofficeStockRecordRepository {
    save(stockRecord: BackofficeStockRecord): Promise<void>;
}