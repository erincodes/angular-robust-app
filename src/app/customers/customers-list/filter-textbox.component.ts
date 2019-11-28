import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "filter-textbox",

  // ngModel is two-way data binding to update the filter
  template: `
    Filter: <input type="text" [(ngModel)]="filter" />
  `
  // Could also do filter this way:
  // Filter: <input type="text" [value] = "filter"(input) = "filter=$event.target.value"
})
export class FilterTextboxComponent implements OnInit {
  private _filter: string;
  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter); //Makes an event object and puts a data property inside. Passes event object to ($event) in customers-list.component.html
  }

  // EventEmitter is the way to send data from a child component up to its parent
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
