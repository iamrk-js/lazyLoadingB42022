import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { TabsComponent } from './tabs/tabs.component';
import { TvsComponent } from './tvs/tvs.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent, children: [
      {path : '' , redirectTo : 'mobiles', pathMatch:'full'},
      { path: 'mobiles', component: MobilesComponent },
      { path: 'tabs', component: TabsComponent },
      { path: 'tvs', component: TvsComponent },
    ]
  }
]

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class ProductsModule {

  constructor() {
    console.log('Products Module initialized');

  }

}
