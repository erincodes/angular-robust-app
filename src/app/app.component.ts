// This is the first file that loads your app

import {Component, OnInit} from "@angular/core";

// Component "decorator":
@Component({
  // selectors are really just tag names
  selector: "app-root",
  // Can do inline template like below OR use a templateUrl: "./app.component.html",
  // Initially had <app - customers > </app-customers> custom tag inside of the template `` below to render app. Changed to router-outlet tag after routes were built. "Components go here" placeholder. As routes are triggered, the component associated is loaded.
  template: `
    <router-outlet></router-outlet>
  `
  // double curly braces are  {{ interpolation }} !
})
export class AppComponent implements OnInit {
  title = "Hello World using data binding";
  // can also do this title: string; that connects with the below ngOnInit
  constructor() {}

  ngOnInit() {
    // We call a service that gets us the data
    // this.title = 'Hello World using Data binding';
  }
}
