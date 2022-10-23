import { Command } from '../../../../Shared/domain/Command';
import { CommandHandler } from '../../../../Shared/domain/CommandHandler';
import { StockRecordSaveCommand } from './StockRecordSaveCommand';
import { StockRecordSave } from './StockRecordSave';
import { ProductId } from '../../../Product/domain/ProductId';
import { PartnerId } from '../../../Partner/domain/PartnerId';
import { StockRecordPriceCurrency } from '../../domain/StockRecordPriceCurrency';
import { StockRecordPrice } from '../../domain/StockRecordPrice';
import { StockRecordNumInStock } from '../../domain/StockRecordNumInStock';
import { StockRecordNumAllocated } from '../../domain/StockRecordNumAllocated';
import { StockRecordLowStockThreshold } from '../../domain/StockRecordLowStockThreshold';
import { StockRecordCreatedAt } from '../../domain/StockRecordCreatedAt';
import { StockRecordId } from '../../domain/StockRecordId';

export class StockRecordSaveCommandHandler implements CommandHandler<StockRecordSaveCommand>{

    constructor(private stockRecordSave: StockRecordSave) { }

    subscribedTo(): Command {
        return StockRecordSaveCommand;
    }

    async handle(command: StockRecordSaveCommand): Promise<void> {

        const id = new StockRecordId(command.id);
        const product = new ProductId(command.product);
        const partner = new PartnerId(command.partner);
        const price_currency = new StockRecordPriceCurrency(command.price_currency);
        const price = new StockRecordPrice(command.price);
        const num_in_stock = new StockRecordNumInStock(command.num_in_stock);
        const num_allocated = new StockRecordNumAllocated(command.num_allocated);
        const low_stock_threshold = new StockRecordLowStockThreshold(command.low_stock_threshold);
        const created_at = new StockRecordCreatedAt(command.created_at);

        await this.stockRecordSave.run({ id, product, partner, price_currency, price, num_in_stock, num_allocated, low_stock_threshold, created_at });
    }
}