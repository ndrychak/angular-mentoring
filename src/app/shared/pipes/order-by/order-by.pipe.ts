import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(array: Array<any>, orderByProperty: string): Array<any> {
    return array.sort((a, b) => (a[orderByProperty] > b[orderByProperty]) ? -1 : 1);
  }

}
