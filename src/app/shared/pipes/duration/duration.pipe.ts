import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
  name: 'duration'
})

export class DurationPipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(minutes: string | number, locale: string): string {
    const reg = new RegExp('^[1-9]+$');

    if (!minutes ||
      (typeof minutes === 'string' && !reg.test(minutes)) ||
      (typeof minutes === 'number' && !Number.isInteger(minutes))) {
      return '';
    }

    minutes = Number(minutes);

    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;

    const i18nHour = this.translateService.translations[locale].DURATION.HOUR;
    const i18nMinute = this.translateService.translations[locale].DURATION.MIN;

    if (hours && !min) {
      return `${hours}${i18nHour}`;
    } else if (!hours && min) {
      return `${min}${i18nMinute}`;
    } else {
      return `${hours}${i18nHour} ${min}${i18nMinute}`;
    }
  }
}
