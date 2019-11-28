import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {OrdersComponent} from "../orders/orders.component";

const routes: Routes = [
  // orders:id represents the id of the order that we want to retrieve. id is a route parameter, a variable, can be whatever you want. Can also have multiple, like order/:id/:state
  {path: "orders/:id", component: OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
