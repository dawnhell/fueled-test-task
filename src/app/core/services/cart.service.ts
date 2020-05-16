import { BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/internal/operators';

import { Product } from '../../shared/models/product';

export class CartService {
  public products$: BehaviorSubject<Array<Product>> = new BehaviorSubject([]);

  public nextProducts(product: Array<Product>): void {
    this.products$.next(product);
  }

  public updateProduct(product: Product): void {
    this.products$
      .pipe(
        take(1),
        tap((products: Array<Product>) => {
          const index: number = products.findIndex((item: Product) => item.id === product.id);
          products[index] = product;
        })
      )
      .subscribe(
        (products: Array<Product>) => this.nextProducts(products),
        (error: any) => console.log(error)
      );
  }

  public deleteProduct(id: number): void {
    this.products$
      .pipe(
        take(1),
        map((products: Array<Product>) => products.filter((product: Product) => product.id !== id))
      )
      .subscribe(
        (products: Array<Product>) => this.nextProducts(products),
        (error: any) => console.log(error)
      );
  }
}
