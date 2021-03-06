import { Injectable } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Product } from './product';
import { CartInfo } from './models/shared.model';
import { cartProducts } from './models/cartProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Carts: Product[] = [];

  constructor(private cartInfo: CartInfo) { }
  addToCart(product) {
    this.Carts.push(product);
    cartProducts.push(product);
    this.cartInfo.getCartInfo();
  }
}
