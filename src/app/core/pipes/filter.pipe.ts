import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(array: Array<any>, filterProperty: string, filterKey = ''): Array<any> {
    return array.filter(x => x[filterProperty].toLowerCase().includes(filterKey.toLowerCase().trim()));
  }

}
