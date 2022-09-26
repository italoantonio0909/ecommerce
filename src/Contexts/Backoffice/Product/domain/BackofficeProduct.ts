import { BackofficeProductTitle } from './BackofficeProductTitle';
import { BackofficeProductDescription } from './BackofficeProductDescription';
import { BackofficeProductMetaTitle } from './BackofficeProductMetaTitle';
import { BackofficeProductMetaDescription } from './BackofficeProductMetaDescription';
import { BackofficeProductStructure, ProductStructure } from './BackofficeProductStructure';
import { BackofficeProductRating } from './BackofficeProductRating';
import { BackofficeProductCreatedAt } from './BackofficeProductCreatedAt';
import { BackofficeProductModifiedAt } from './BackofficeProductModifiedAt';
import { BackofficeProductIsDiscountable } from './BackofficeProductIsDiscountable';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { Category } from '../../Category/domain/Category';
import { ProductClass } from '../../ProductClass/domain/ProductClass';

export class BackofficeProduct extends AggregateRoot {
  readonly structure: BackofficeProductStructure;
  readonly is_public: boolean;
  readonly parent: BackofficeProduct;
  readonly title: BackofficeProductTitle;
  readonly description: BackofficeProductDescription;
  readonly meta_title: BackofficeProductMetaTitle;
  readonly meta_description: BackofficeProductMetaDescription;
  readonly product_class: ProductClass;
  readonly categories: Array<Category>;
  readonly is_discountable: BackofficeProductIsDiscountable;
  readonly recommended_products: Array<BackofficeProduct>;
  readonly rating: BackofficeProductRating;
  readonly created_at: BackofficeProductCreatedAt;
  readonly modified_at: BackofficeProductModifiedAt;

  constructor(
    structure: BackofficeProductStructure,
    is_public: boolean,
    parent: BackofficeProduct,
    title: BackofficeProductTitle,
    description: BackofficeProductDescription,
    meta_title: BackofficeProductMetaTitle,
    meta_description: BackofficeProductMetaDescription,
    product_class: ProductClass,
    categories: Array<Category>,
    is_discountable: BackofficeProductIsDiscountable,
    rating: BackofficeProductRating,
    created_at: BackofficeProductCreatedAt
  ) {
    super();
    this.structure = structure;
    this.is_public = is_public;
    this.parent = parent;
    this.title = title;
    this.description = description;
    this.meta_title = meta_title;
    this.meta_description = meta_description;
    this.product_class = product_class;
    this.categories = categories;
    this.is_discountable = is_discountable;
    this.rating = rating;
    this.created_at = created_at;
  }

  static create(
    structure: ProductStructure,
    is_public: boolean,
    parent: BackofficeProduct,
    title: string,
    description: string,
    meta_title: string,
    meta_description: string,
    product_class: ProductClass,
    categories: Array<Category>,
    is_discountable: boolean,
    rating: number,
    created_at: number
  ): BackofficeProduct {
    return new BackofficeProduct(
      new BackofficeProductStructure(structure),
      is_public,
      parent,
      new BackofficeProductTitle(title),
      new BackofficeProductDescription(description),
      new BackofficeProductMetaTitle(meta_title),
      new BackofficeProductMetaDescription(meta_description),
      product_class,
      categories,
      new BackofficeProductIsDiscountable(is_discountable),
      new BackofficeProductRating(rating),
      new BackofficeProductCreatedAt(created_at)
    )
  }

  toPrimitives() {
    return {
      estructure: this.structure.value,
      is_public: this.is_public,
      parent: this.parent,
      title: this.title.value,
      description: this.description.value,
      meta_title: this.meta_title.value,
      meta_description: this.meta_description.value,
      product_class: this.product_class,
      categories: this.categories,
      is_discountable: this.is_discountable.value,
      rating: this.rating.value,
      created_at: this.created_at.value
    }
  }
}
