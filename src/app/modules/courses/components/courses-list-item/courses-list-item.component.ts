import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ICoursesListItem } from '../../models/courses-list-item';

import { CoursesService } from '../../courses.service';

@Component({
  selector: 'agm-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListItemComponent {
  @Input() coursesListItem: ICoursesListItem;
  @Output() deletedCourse = new EventEmitter<ICoursesListItem>();

  constructor(private coursesService: CoursesService) { }

  editCourse(): void {
    this.coursesService.updateItem(this.coursesListItem.id);
  }

  deleteButtonHandler(): void {
    this.deletedCourse.emit(this.coursesListItem);
  }
}
