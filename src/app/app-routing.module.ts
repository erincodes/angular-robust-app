import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  // Routes is an interface (optional from @angular/router), helps avoid mistakes/types in path names
  // path: "" signifies the home domain
  {path: "", pathMatch: "full", redirectTo: "/customers"},
  // path: ** is a wildcard to match anything
  {path: "**", pathMatch: "full", redirectTo: "/customers"}
];

// In more basic apps, you can add all routes into this root level module. We added a route module into each component.
@NgModule({
  // Only call forRoot one time in an application, normally see in a file at the root level of the application.
  // Makes this bucket of tools available to any other file that imports this module
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
