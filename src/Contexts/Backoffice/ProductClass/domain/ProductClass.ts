
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { ProductClassCreatedAt } from './ProductClassCreatedAt';
import { ProductClassId } from './ProductClassId';
import { ProductClassModifiedAt } from './ProductClassModifiedAt';
import { ProductClassName } from './ProductClassName';
import { ProductClassRequiredShipping } from './ProductClassRequiredShipping';
import { ProductClassTrackStock } from './ProductClassTrackStock';

export class ProductClass extends AggregateRoot {
  readonly id: ProductClassId;
  readonly name: ProductClassName;
  readonly required_shipping: ProductClassRequiredShipping;
  readonly track_stock: ProductClassTrackStock;
  // readonly options?: Array<Option>;
  readonly created_at?: ProductClassCreatedAt;
  readonly modified_at?: ProductClassModifiedAt;

  constructor(id: ProductClassId, name: ProductClassName, required_shipping: ProductClassRequiredShipping, track_stock: ProductClassTrackStock, created_at: ProductClassCreatedAt) {
    super();
    this.id = id;
    this.name = name;
    this.required_shipping = required_shipping;
    this.track_stock = track_stock;
    this.created_at = created_at;
  }

  static create(id: ProductClassId, name: ProductClassName, required_shipping: ProductClassRequiredShipping, track_stock: ProductClassTrackStock, created_at: ProductClassCreatedAt) {
    return new ProductClass(id, name, required_shipping, track_stock, created_at);
  }

  static fromPrimitives(id: string, name: string, required_shipping: boolean, track_stock: boolean, created_at: Date) {
    return new ProductClass(
      new ProductClassId(id),
      new ProductClassName(name),
      new ProductClassRequiredShipping(required_shipping),
      new ProductClassTrackStock(track_stock),
      new ProductClassCreatedAt(created_at)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      required_shipping: this.required_shipping.value,
      track_stock: this.track_stock.value,
      created_at: this.created_at.value
    }
  }
}