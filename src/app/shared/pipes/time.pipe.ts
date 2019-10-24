import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hours'
})

export class TimePipe implements PipeTransform {
  public transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    if (hours && !min) {
      return `${hours}h`;
    } else if (!hours && min) {
      return `${min} min`;
    } else {
      return `${hours}h ${min} min`;
    }
  }
}
