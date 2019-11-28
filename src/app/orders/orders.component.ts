import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {DataService} from "../core/data.service";
import {ICustomer, IOrder, IOrderItem} from "../shared/interfaces";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(
    private dataService: DataService,
    // ActivatedRoute is the current URL for the screen you're on
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route goes to the activate/current route
    // .paramMap Keeps data on screen even when route changes
    let id = +this.route.snapshot.paramMap.get("id"); // a static picture of the URL, gets id as string. Works in this case because we only need the id once. + converts string into integer (from a string)
    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      // pass the id into getOrders
      this.orders = orders;
    });

    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      // pass the id into getCustomers
      this.customer = customer;
    });
  }
}
