import {Component} from '@angular/core';
import {Shop, shops} from '../shops';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  shops = [...shops];


  addShop(ttttt: string) {
    // let shop: Shop = {name: fffff};
    this.shops.unshift({name: ttttt});
  }

  remove(shop: Shop) {
    let index = this.shops.indexOf(shop);
    this.shops.splice(index, 1)
  }
}
