import { Product } from './product';
import { Checkout } from './checkout';

export interface Order {
  items: Array<Product>;
  details: Checkout;
  comments: string;
}
