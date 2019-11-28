// Import your decorators:
import {Component, OnInit, Input} from "@angular/core";

// Import custom stuff:
import {ICustomer} from "src/app/shared/interfaces";
import {SorterService} from "./../../core/sorter.service";
import {IfStmt} from "@angular/compiler";

// Decorators are functions and need the @ syntax. @Component()
@Component({
  selector: "customers-list",
  // templateUrl is a relative path
  templateUrl: "./customers-list.component.html"
})
export class CustomersListComponent implements OnInit {
  // input property indicates that the child accepts input from the parent component. Can do two ways using Input Decorator:
  // @Input() customers: any[];

  // _customers is a private variable whaaat. Stores the original, unfiltered value of the customers
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    // get customers() is kind of like binding to a DOM property
    return this._customers;
  }
  // Gotta put the @Input decorator on either the GET or the SET, but not both. Doesn't matter which.
  set customers(value: ICustomer[]) {
    if (value) {
      // If there is a value (not null, etc.), then set filteredCustomers and _customers to that value.
      this.filteredCustomers = this._customers = value;
      // Then run the calculateOrders function
      this.calculateOrders();
    }
  }

  // filteredCustomers connects to the *ngFor in customers-list.component.html
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  //currencyCode is a "pipe". Don't have to state that it's a STRING, but we're being extra explicit
  currencyCode: string = "USD";

  constructor(private sorterService: SorterService) {}

  ngOnInit() {}

  // This ngOnChanges is connected to the @Input() commented out above. Another way to do input property, good if you have a lot of changes that you're watching for. Would need to import SimpleChanges at top of file.
  // ngOnChanges(changes: SimpleChanges) {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  // filters the data the user types in the input box
  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1
        );
      });
    } else {
      // reset customers back to all the original customers
      this.filteredCustomers = this.customers;
    }
    // update the total $ value
    this.calculateOrders();
  }

  sort(prop: string) {
    // sorter service handles the sorting
    // connects with (click) event in the customers-list.component.html
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
