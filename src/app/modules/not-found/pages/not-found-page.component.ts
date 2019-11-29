import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'agm-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotFoundPageComponent {

  constructor() {}
}
