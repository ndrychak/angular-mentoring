import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from '@angular/router';

import {ICoursesListItem} from '../../../courses-list/models/courses-list-item';
import {INewCourse} from '../../models/new-course';

import {CoursesService} from '../../../../core/services/courses/courses.service';

@Component({
  selector: 'agm-courses-item-form',
  templateUrl: './courses-item-form.component.html',
  styleUrls: ['./courses-item-form.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesItemFormComponent {
  @Input() courseItem: ICoursesListItem;

  private form: INewCourse = {
    title: '',
    description: '',
    creationDate: '',
    duration: 0
  };

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

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
    this.router.navigateByUrl('/courses');
  }
}
