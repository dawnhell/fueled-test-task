import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CartService } from '../services/cart.service';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartApi {
  private productsEndpoint = 'api/products';

  constructor(private http: HttpClient, private service: CartService) { }

  public getProducts(): void {
    this.http
      .get<Array<Product>>(this.productsEndpoint)
      .subscribe(
        (products: Array<Product>) => this.service.nextProducts(products),
        (error: any) => console.log(error)
      );
  }

  public updateProduct(product: Product): void {
    this.http
      .put(`${this.productsEndpoint}`, product)
      .subscribe(
        () => this.service.updateProduct(product),
        (error: any) => console.log(error)
      );
  }

  public deleteProduct(id: number): void {
    this.http
      .delete(`${this.productsEndpoint}/${id}`)
      .subscribe(
        () => this.service.deleteProduct(id),
        (error: any) => console.log(error)
      );
  }
}
