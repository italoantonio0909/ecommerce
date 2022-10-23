import { StockRecord } from './StockRecord';

export interface StockRecordRepository {
    save(stockRecord: StockRecord): Promise<void>;
}