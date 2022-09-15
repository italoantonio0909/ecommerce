import { Customer } from "../../../Sales/Customers/domain/Customer";
import { CustomerRecordNumProductViews } from './CustomerRecordNumProductViews';
import { CustomerRecordNumBasketAdditions } from './CustomerRecordNumBasketAdditions';
import { CustomerRecordNumOrders } from "./CustomerRecordNumOrders";
import { CustomerRecordNumOrderLines } from './CustomerRecordNumOrderLines';
import { CustomerRecordNumOrderItems } from "./CustomerRecordNumOrderItems";
import { CustomerRecordTotalSpent } from './CustomerRecordTotalSpent';

export class CustomerRecord {
    customer: Customer;
    num_product_views: CustomerRecordNumProductViews;
    num_basket_additions: CustomerRecordNumBasketAdditions;
    num_orders: CustomerRecordNumOrders;
    num_order_lines: CustomerRecordNumOrderLines;
    num_order_items: CustomerRecordNumOrderItems;
    total_spent: CustomerRecordTotalSpent;
    date_last_order: number;
}