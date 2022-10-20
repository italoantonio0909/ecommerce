
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { ProductIsPublic } from './ProductIsPublic';
import { ProductClassId } from '../../ProductClass/domain/ProductClassId';
import { CategoryId } from '../../Category/domain/CategoryId';
import { ProductId } from './ProductId';
import { ProductStructure } from './ProductStructure';
import { ProductTitle } from './ProductTitle';
import { ProductDescription } from './ProductDescription';
import { ProductMetaTitle } from './ProductMetaTitle';
import { ProductIsDiscountable } from './ProductIsDiscountable';
import { ProductMetaDescription } from './ProductMetaDescription';
import { ProductCreatedAt } from './ProductCreatedAt';
import { ProductRating } from './ProductRating';
import { ProductModifiedAt } from './ProductModifiedAt';
import { ProductSavedDomainEvent } from './ProductSavedDomainEvent';

export class Product extends AggregateRoot {

  readonly id: ProductId;
  readonly structure: ProductStructure;
  readonly is_public: ProductIsPublic;
  readonly parent: ProductId;
  readonly title: ProductTitle;
  readonly description: ProductDescription;
  readonly meta_title: ProductMetaTitle;
  readonly meta_description: ProductMetaDescription;
  readonly product_class: ProductClassId;
  readonly categories: Array<CategoryId>;
  readonly is_discountable: ProductIsDiscountable;
  readonly recommended_products: Array<Product>;
  readonly rating: ProductRating;
  readonly created_at: ProductCreatedAt;
  readonly modified_at: ProductModifiedAt;

  constructor(
    id: ProductId,
    structure: ProductStructure,
    is_public: ProductIsPublic,
    parent: ProductId,
    title: ProductTitle,
    description: ProductDescription,
    meta_title: ProductMetaTitle,
    meta_description: ProductMetaDescription,
    product_class: ProductClassId,
    categories: Array<CategoryId>,
    is_discountable: ProductIsDiscountable,
    rating: ProductRating,
    created_at: ProductCreatedAt
  ) {
    super();
    this.id = id;
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
    id: ProductId,
    structure: ProductStructure,
    is_public: ProductIsPublic,
    parent: ProductId,
    title: ProductTitle,
    description: ProductDescription,
    meta_title: ProductMetaTitle,
    meta_description: ProductMetaDescription,
    product_class: ProductClassId,
    categories: Array<CategoryId>,
    is_discountable: ProductIsDiscountable,
    rating: ProductRating,
    created_at: ProductCreatedAt
  ): Product {
    const product = new Product(
      id,
      structure,
      is_public,
      parent,
      title,
      description,
      meta_title,
      meta_description,
      product_class,
      categories,
      is_discountable,
      rating,
      created_at
    );

    product.record(new ProductSavedDomainEvent({ id: id.value }));

    return product;
  }


  toPrimitives() {
    return {
      id: this.id.value,
      estructure: this.structure.value,
      is_public: this.is_public.value,
      parent: this.parent.value,
      title: this.title.value,
      description: this.description.value,
      meta_title: this.meta_title.value,
      meta_description: this.meta_description.value,
      product_class: this.product_class.value,
      categories: this.categories,
      is_discountable: this.is_discountable.value,
      rating: this.rating.value,
      created_at: this.created_at.value
    }
  }
}
