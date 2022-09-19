// import { Product } from "../../Catalogue/Product/domain/Product";

import { Customer } from "../../Customers/domain/Customer";
import { WishlistName } from './WishlistName';
import { WishlistKey } from './WishlistKey';
import { WishlistVisibility } from './WishlistVisibility';
import { WishlistCreatedAt } from './WishlistCreatedAt';

export class Wishlist {
    owner: Customer;
    name: WishlistName;
    key: WishlistKey;
    visibility: WishlistVisibility;
    created_at: WishlistCreatedAt;
}
