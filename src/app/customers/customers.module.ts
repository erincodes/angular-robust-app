import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms"; //built into angular, just gotta import it
import {CommonModule} from "@angular/common"; //CommonModule has your ng-if,etc and other directives
import {CustomersRoutingModule} from "./customers-routing.module";

import {SharedModule} from "../shared/shared.module"; //has our capitalize pipe
import {CustomersComponent} from "./customers.component";
import {CustomersListComponent} from "./customers-list/customers-list.component";
import {FilterTextboxComponent} from "./customers-list/filter-textbox.component";

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  exports: [CustomersComponent]
})
export class CustomersModule {}
