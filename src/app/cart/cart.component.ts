import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CartApi } from '../core/api/cart-api';
import { CartService } from '../core/services/cart.service';
import { Product } from '../shared/models/product';
import { Checkout } from '../shared/models/checkout';
import { Order } from '../shared/models/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public commentsControl: FormControl = new FormControl('');

  constructor(public service: CartService, private cartApi: CartApi) { }

  ngOnInit() {
    this.cartApi.getProducts();
  }

  public onProductUpdate(product: Product) {
    this.cartApi.updateProduct(product);
  }

  public onProductDelete(id: number): void {
    this.cartApi.deleteProduct(id);
  }

  public onSubmitOrder(orderDetails: Checkout): void {
    const order: Order = {
      items: this.service.products$.getValue(),
      details: orderDetails,
      comments: this.commentsControl.value
    };

    console.log('The order has just sent.', order);
  }
}
