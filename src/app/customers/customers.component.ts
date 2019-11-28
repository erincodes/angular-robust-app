import {ICustomer} from "./../shared/interfaces";
import {Component, OnInit} from "@angular/core";
import {DataService} from "../core/data.service";

@Component({
  selector: "app-customers",
  // templateUrl is a relative path
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"]
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[]; // Can also assign to people: any[];
  isVisible = true;

  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

  // can also make component constructors "injectable" (like in data.service.ts). Now at runtime, dataService will be created by the provider and then injected into the constructor with the property dataService
  // private dataService of type DataService
  constructor(private dataService: DataService) {}
  ngOnInit() {
    // this.title refers to what is injected with {{ }} in customers.component.html
    this.title = "Customers";
    this.dataService
      .getCustomers()
      .subscribe((customers: ICustomer[]) => (this.people = customers)); //this getCustomer().subscribe() is what calls & activates the getCustomers function in the data.service.ts file and returns an Observable (async operation, we get the data eventually). We have to pass the customers that the .subscribe gives us and assign it to our "people" variable.

    // this.people = [
    //   {
    //     id: 1,
    //     name: "john Doe",
    //     city: "Phoenix",
    //     orderTotal: 9.99,
    //     customerSince: new Date(2014, 7, 10)
    //   },
    //   {
    //     id: 2,
    //     name: "Jane Doe",
    //     city: "Chandler",
    //     orderTotal: 19.99,
    //     customerSince: new Date(2017, 2, 22)
    //   },
    //   {
    //     id: 3,
    //     name: "Michelle Thomas",
    //     city: "Seattle",
    //     orderTotal: 99.99,
    //     customerSince: new Date(2002, 10, 31)
    //   },
    //   {
    //     id: 4,
    //     name: "Jim Thomas",
    //     city: "New York",
    //     orderTotal: 599.99,
    //     customerSince: new Date(2002, 10, 31)
    //   }
    // ];
  }
}
