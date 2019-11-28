// A custom pipe responsible for capitalizing the first letter in our name data and then concatenating the rest of the data.

import {Pipe, PipeTransform} from "@angular/core";
// PipeTransform is an available Angular Interface

// can name whatever you want
@Pipe({name: "capitalize"})
export class CapitalizePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
}
