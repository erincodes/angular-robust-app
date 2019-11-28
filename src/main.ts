import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {AppModule} from "./app/app.module";
import {environment} from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

// The first bucket we should look in upon load
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
