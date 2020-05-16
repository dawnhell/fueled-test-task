import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators';

import { Product } from '../../shared/models/product';
import { Checkout } from '../../shared/models/checkout';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  @Input() products: Observable<Array<Product>>;
  @Output() checkoutBtnClick: Subject<Checkout> = new Subject<Checkout>();

  public subTotal = 0;
  public tax = 0;
  public total = 0;

  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this.products
      .pipe(map((products: Array<Product>) => products.reduce((acc, product: Product) => (acc + product.price * product.amount), 0)))
      .subscribe(
        (subTotal: number) => {
          this.subTotal = subTotal;
          this.total = this.subTotal - this.tax;
        },
        (error: any) => console.log(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onCheckoutBtnClick(): void {
    this.checkoutBtnClick.next({
      tax: this.tax,
      total: this.total,
      subTotal: this.subTotal
    });
  }
}
