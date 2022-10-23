import dotenv from 'dotenv';
import { BackofficeStockRecordRepository } from '../../domain/StockRecordRepository';
import { BackofficeStockRecord } from '../../domain/StockRecord';
import firestore from '../../../../../apps/Sales/database';

export class BackofficeStockRecordWebApiClient implements BackofficeStockRecordRepository {

  constructor() { }

  async save(record: BackofficeStockRecord): Promise<void> {
    const ref = firestore.collection('stock_record').doc();

    const stockRecord = {
      low_stock_threshold: record.low_stock_threshold.value,
      product: record.product,
      created_at: record.created_at.value,
      num_allocated: record.num_allocated.value,
      num_in_stock: record.num_in_stock.value,
      partner: record.partner,
      price: record.price,
      price_currency: record.price_currency,
    }

    await ref.create(stockRecord);
  }

}
