import {Component} from '@angular/core';
import {Product, products} from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products = [...products];

  addProduct(name: string, price: number, category: string, count: number, shop: string, total_price: number) {
    this.products.unshift({
      category: category, count: count,
      price: price, shop: shop,
      total_price: total_price, name: name
    });
  }

  editable = false;

  saveProduct(name: string, price: number, category: string, count: number, shop: string, total_price: number, product: Product) {
    if (!name) return;
    this.editable = false;
    product.name = name;
    product.count = count;
    product.price = price;
    product.shop = shop;
    product.category = category;
    product.total_price = total_price;
  }

  edit() {
    this.editable = !this.editable
  }

  remove(product: Product) {
    let index = this.products.indexOf(product);
    this.products.splice(index, 1)
  }


}
