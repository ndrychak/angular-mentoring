import { Component, Input } from '@angular/core';
import { ICoursesListItem } from '../../models/courses-list-item';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'agm-courses-item-form',
  templateUrl: './courses-item-form.component.html',
  styleUrls: ['./courses-item-form.component.styl']
})

export class CoursesItemFormComponent {
  @Input() courseItem: ICoursesListItem;

  private form = {
    title: '',
    description: '',
    creationDate: '',
    duration: 0
  };

  constructor(private coursesService: CoursesService) { }

  setDuration(duration) {
    this.form.duration = duration;
  }

  setCreationDate(creationDate) {
    this.form.creationDate = creationDate;
  }

  save(form) {
    this.form.title = form.value.title;
    this.form.description = form.value.description;

    this.coursesService.createItem(this.form);
  }
}
