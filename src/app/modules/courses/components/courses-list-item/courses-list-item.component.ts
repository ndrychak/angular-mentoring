import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICoursesListItem } from '../../models/courses-list-item';

@Component({
  selector: 'agm-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.styl']
})

export class CoursesListItemComponent {
  @Input() coursesListItem: ICoursesListItem;
  @Output() deletedCourse = new EventEmitter<number>();

  constructor() { }

  editCourse(): void {
    console.log('edit course');
  }

  deleteButtonHandler(): void {
    this.deletedCourse.emit(this.coursesListItem.id);
  }
}
