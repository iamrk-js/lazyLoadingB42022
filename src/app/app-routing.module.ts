import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { AdminsComponent } from './admins/admins/admins.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './products/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "admins", loadChildren : () => import('./admins/admins.module').then(m => m.AdminsModule)},
  { path: "products", loadChildren : () => import('./products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
