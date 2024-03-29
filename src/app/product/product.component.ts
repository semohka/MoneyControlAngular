import {Component} from '@angular/core';
import {products} from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products = [...products];

  // addProduct(name: string, price: number, category: string, image: string, count: number, shop: string, total_price: number) {
  //   this.products.unshift({
  //     category: category, count: count,
  //     image: image, price: price, shop: shop,
  //     total_price: total_price, name: name
  //   });
  // }
}
