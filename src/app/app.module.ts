// Our "root" module
// The app component file gets automatically registered as a module as well with the CLI.
// Modules are crucial for organization of your app.

// Importing = building scripts
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"; // BrowserModule includes directives in it, helpful for data binding. Critical!
import {HttpClientModule} from "@angular/common/http"; // I added this module/imported below based on console errors & Stack Overflow
import {OrdersRoutingModule} from "./orders/orders-routing.module";
import {CoreModule} from "./core/core.module"; // Includes the data.service and sorter.service, importing here makes these globally available throughout app. Anything under this root module (such as Customers and Shared) have access to these services.
import {CustomersModule} from "./customers/customers.module";
import {SharedModule} from "./shared/shared.module";
import {AppComponent} from "./app.component";

// Commenting out this import because it changes to using the CustomersModule with no notice in video #10
// import {CustomersComponent} from "./customers/customers.component";

import {AppRoutingModule} from "./app-routing.module";
import {OrdersModule} from "./orders/orders.module";

// @NGModule decorator provides metadata, imported from Angular core
@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    CustomersModule,
    OrdersModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  // providers: [],

  // bootstrap = assigning what is the start-up component/first thing user sees
  bootstrap: [AppComponent]
})

// This is how the app knows what lego block to render first
export class AppModule {}
