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
  @Input() isEditForm: boolean;

  public title: string;
  private form: INewCourse = {
    name: '',
    date: '',
    length: 0,
    description: '',
    authors: [],
    isTopRated: false
  };

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {
    this.title = this.isEditForm ? 'Edit course' : 'New course';
  }

  setDuration(duration) {
    this.form.length = duration;
  }

  setCreationDate(creationDate) {
    this.form.date = creationDate;
  }

  save(form) {
    const action = this.isEditForm ? 'updateItem' : 'createItem';

    this.form.name = form.value.title;
    this.form.description = form.value.description;

    if (this.isEditForm) {
      this.form.id = this.courseItem.id;
      this.form.isTopRated = this.courseItem.isTopRated;
      this.form.authors = this.courseItem.authors;
    }

    this.coursesService[action](this.form).subscribe(() => {
      this.router.navigateByUrl('/courses');
    });
  }
}
