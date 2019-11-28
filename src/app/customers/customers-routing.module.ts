import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CustomersComponent} from "./customers.component";

const routes: Routes = [
  // Routes is an interface (optional from @angular/router), helps avoid mistakes/types in path names
  {path: "customers", component: CustomersComponent}
];

@NgModule({
  // Have to change to forChild, can't use forRoot more than once.
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
