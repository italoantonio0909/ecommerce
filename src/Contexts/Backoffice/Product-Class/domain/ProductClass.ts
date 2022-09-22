import { BackofficeProductClassName } from './BackofficeProductClassName';
import { BackofficeProductClassTrackStock } from './BackofficeProductClassTrackStock';
import { BackofficeProductClassRequiredShipping } from './BackofficeProductClassRequiredShipping';
import { BackofficeProductClassCreatedAt } from './BackofficeProductClassCreatedAt';
import { BackofficeProductClassModifiedAt } from './BackofficeProductClassModifiedAt';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class BackofficeProductClass extends AggregateRoot {
  readonly name: BackofficeProductClassName;
  readonly required_shipping: BackofficeProductClassRequiredShipping;
  readonly track_stock: BackofficeProductClassTrackStock;
  // readonly options?: Array<Option>;
  readonly created_at?: BackofficeProductClassCreatedAt;
  readonly modified_at?: BackofficeProductClassModifiedAt;

  constructor(name: BackofficeProductClassName, required_shipping: BackofficeProductClassRequiredShipping, track_stock: BackofficeProductClassTrackStock, created_at: BackofficeProductClassCreatedAt) {
    super();
    this.name = name;
    this.required_shipping = required_shipping;
    this.track_stock = track_stock;
    this.created_at = created_at;
  }

  static create(name: string, required_shipping: boolean, track_stock: boolean, created_at: number) {
    return new BackofficeProductClass(
      new BackofficeProductClassName(name),
      new BackofficeProductClassRequiredShipping(required_shipping),
      new BackofficeProductClassTrackStock(track_stock),
      new BackofficeProductClassCreatedAt(created_at));
  }

  static fromPrimitives(name: string, required_shipping: boolean, track_stock: boolean, created_at: number) {
    return new BackofficeProductClass(
      new BackofficeProductClassName(name),
      new BackofficeProductClassRequiredShipping(required_shipping),
      new BackofficeProductClassTrackStock(track_stock),
      new BackofficeProductClassCreatedAt(created_at)
    );
  }

  toPrimitives() {
    return {
      name: this.name.value,
      required_shipping: this.required_shipping.value,
      track_stock: this.track_stock.value,
      created_at: this.created_at
    }
  }
}