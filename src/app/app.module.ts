import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {ShopComponent} from './shop/shop.component';
import {FormsModule} from "@angular/forms";
import {ReceiptComponent} from './receipt/receipt.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {StatisticComponent} from './statistic/statistic.component';

const appRoutes: Routes = [
  {path: 'shop', component: ShopComponent},
  {path: 'receipt', component: ReceiptComponent},
  {path: 'product', component: ProductComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'statistic', component: StatisticComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ReceiptComponent,
    ProductComponent,
    CategoryComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
