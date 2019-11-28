// Put anything that's shared throughout the application in here. Be sure to import SharedModule into app.module
import {NgModule} from "@angular/core";
import {CapitalizePipe} from "./capitalize.pipe";

@NgModule({
  declarations: [CapitalizePipe],
  // exporting makes CapitalizePipe accessible throughout the app
  exports: [CapitalizePipe]
})
export class SharedModule {}
