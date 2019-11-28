// Interfaces = a set of rules, a code contract. Useful b/c they add guardrails to avoid typos.
export interface ICustomer {
  id: number;
  name: string;
  city: string;
  // orderTotal is an optional property, hence the question mark
  orderTotal?: number;
  // "any" is a data type
  customerSince: any;
}

export interface IOrder {
  customerId: number;
  orderItems: IOrderItem[];
}

export interface IOrderItem {
  id: number;
  productName: string;
  itemCost: number;
}
