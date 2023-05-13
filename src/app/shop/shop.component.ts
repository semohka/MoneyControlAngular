import {Component} from '@angular/core';
import {Shop, shops} from '../shops';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  time: string | undefined;
  shops = [...shops];

  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000)
  }

  editable = false;

  saveShop(name: string, shop: Shop) {
    if (!name) return;
    this.editable = false;
    shop.name = name;
  }

  addShop(ttttt: string) {
    // let shop: Shop = {name: fffff};
    this.shops.unshift({name: ttttt});
  }

  remove(shop: Shop) {
    let index = this.shops.indexOf(shop);
    this.shops.splice(index, 1)
  }

  edit() {
    this.editable = !this.editable
  }

}
