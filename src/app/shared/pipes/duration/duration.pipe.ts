import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  transform(minutes: string | number): string {
    const reg = new RegExp('^[1-9]+$');

    if (!minutes ||
      (typeof minutes === 'string' && !reg.test(minutes)) ||
      (typeof minutes === 'number' && !Number.isInteger(minutes))) {
      return '';
    }

    minutes = Number(minutes);

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
