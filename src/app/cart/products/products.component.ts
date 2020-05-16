import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() products: Array<Product>;
  @Output() updateBtnClick: Subject<Product> = new Subject<Product>();
  @Output() deleteBtnClick: Subject<number> = new Subject<number>();

  public onUpdateBtnClick(product: Product): void {
    this.updateBtnClick.next(product);
  }

  public onDeleteBtnClick(id: number): void {
    this.deleteBtnClick.next(id);
  }
}
