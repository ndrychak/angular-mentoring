import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {ICoursesListItem} from '@core/models/courses-list-item';

@Component({
  selector: 'agm-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListItemComponent {
  @Input() coursesListItem: ICoursesListItem;
  @Output() deletedCourse = new EventEmitter<ICoursesListItem>();

  constructor() { }

  deleteButtonHandler(): void {
    this.deletedCourse.emit(this.coursesListItem);
  }
}
