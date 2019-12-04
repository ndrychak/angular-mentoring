import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'agm-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesPageComponent {

  constructor() {}
}
