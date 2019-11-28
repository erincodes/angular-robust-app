// responsible for AJAX (or HTTP) calls to the server

import {Injectable} from "@angular/core";

// HttpClient can do get/post/put requests to communicate with a restful service. Will be injected into the constructor below
import {HttpClient} from "@angular/common/http";

// Observable helps with async operations as you talk to the server. RXJS is not part of Angular but is included in the CLI
import {Observable} from "rxjs";

// operators from RXJS for use in pipe below
import {map, catchError} from "rxjs/operators";

import {ICustomer, IOrder} from "../../app/shared/interfaces";

// This @Injectable decorator allows for dependency injection for Services
@Injectable()
export class DataService {
  baseUrl: string = "assets/";

  // HTTPClient is a "singleton". One copy of a singleton service at a time. Can inject into other services OR components (like customers) dynamically with no extra work. Return an Observable that the component can then subscribe to.
  constructor(private http: HttpClient) {}

  // function getCustomers with a return type of an object called Observable. Observable has a "generic" of ICustomer [].
  // Do it this way because it's an async operation and Observable allows us to do that.
  // Can convert Observables into promises if you want.
  // Observables have $. Like selectedFacility$.
  getCustomers(): Observable<ICustomer[]> {
    // kind of a pub sub situation. Subscribe to ICustomer and when the information is returned, receive the update.
    // a "cold observable" - it's there but you have to tell it to turn on. In this case, we do that in customers.component.ts
    // Imagine a conveyer belt of luggage. HTTP request is only one piece of luggage. Observable is many pieces of luggage coming and going by, and you can pick and choose what you pick up.
    return this.http.get<ICustomer[]>(this.baseUrl + "customers.json").pipe(
      // the .pipe is like a water pipe connection. Different from pipe to format data. As water flows, you can plug in different types of filters aka Operators. Can use an Operator to handle errors for example and forward the error to the handleError function below.
      catchError(this.handleError)
    );
  }

  getCustomer(id: number): Observable<ICustomer> {
    // we expect to get back all of the customers
    return this.http.get<ICustomer[]>(this.baseUrl + "customers.json").pipe(
      // when the return comes along the pipe, we know we can get to that response data.
      map(customers => {
        // filter down to get customer object that matches id passed in initially.
        let customer = customers.filter((cust: ICustomer) => cust.id === id);
        // whatever you return from the MAP is what the user sees. They don't get the full original unfiltered.
        return customer && customer.length ? customer[0] : null;
      }),
      catchError(this.handleError)
    );
  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + "orders.json").pipe(
      map(orders => {
        let custOrders = orders.filter(
          (order: IOrder) => order.customerId === id
        );
        return custOrders;
      }),
      catchError(this.handleError)
    );
  }

  // report errors and log them to the console
  private handleError(error: any) {
    console.error("server error:", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || "Node.js server error");
  }
}
