import { Customer } from '../../Customers/domain/Customer';
import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';

export class Post extends AggregateRoot {
  readonly id?: string;
  readonly title: string;
  readonly meta_description: string;
  readonly description: string;
  readonly image: string;
  readonly number_comments: number;
  readonly comments: Array<Comment>;
  readonly status: boolean;
  readonly is_public: boolean;
  readonly publish_at?: number;
  readonly created_at?: number;
  readonly modified_at?: number;

  constructor() {
    super();
  }

  static addComment(
    created_by: Customer,
    content: string,
    status: "active" | "banned",
    created_at: number): Comment {

    const comment = new Comment(
      created_by,
      content,
      status,
      created_at
    );

    return comment;
  }
  toPrimitives() {
    return {

    }
  }

}

export class Comment {
  readonly created_by: Customer;
  readonly content: string
  readonly status: "active" | "banned"
  readonly created_at?: number
  readonly modified_at?: number

  constructor(
    created_by: Customer,
    content: string,
    status: "active" | "banned",
    created_at: number
  ) {
    this.created_by = created_by;
    this.content = content;
    this.status = status;
    this.created_at = created_at
  }

  static create(
    created_by: Customer,
    content: string,
    status: "active" | "banned",
    created_at: number
  ): Comment {

    const comment = new Comment(
      created_by,
      content,
      status,
      created_at
    );

    return comment;
  }
}
