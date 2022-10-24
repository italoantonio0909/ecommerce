import { StockRecordRepository } from '../domain/StockRecordRepository';
import { StockRecord } from '../domain/StockRecord';
import { FirebaseRepository } from '../../../Shared/infrastructure/persistence/FirebaseRepository';

export class StockRecordWebApiClient extends FirebaseRepository<StockRecord> implements StockRecordRepository {

  async save(record: StockRecord): Promise<void> {
    await this.persist(record);
  }

  moduleName(): string {
    return 'stock_record';
  }

  orderBy(): string {
    return 'created_at';
  }

}
