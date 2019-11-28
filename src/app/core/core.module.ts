// You don't "declare" services. You "provide" them in order for them to be used.
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

import {DataService} from "./data.service";
import {SorterService} from "./sorter.service";

@NgModule({
  imports: [],
  //   Provider (chef) goes hand-in-hand with Injector containers (waiter). Providers serve up the Services when requested by the Component or another Service (customers)
  providers: [DataService, SorterService]
})
export class CoreModule {}
