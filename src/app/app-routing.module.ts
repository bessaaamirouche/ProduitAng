import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import {PanierComponent} from "./panier/panier.component";
import {SavComponent} from "./sav/sav.component";

const routes: Routes = [
  {path:"products", component : ProductsComponent},
  {path:"clients", component : ClientsComponent},
  {path:"panier", component : PanierComponent},
  {path:"sav", component : SavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
