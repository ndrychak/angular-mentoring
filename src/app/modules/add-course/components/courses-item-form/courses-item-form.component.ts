import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {ICoursesListItem} from '@core/models/courses-list-item';
import {INewCourse} from '@core/models/new-course';
import {CourseItemStoreActions, RootStoreState} from '@core/store';

@Component({
  selector: 'agm-courses-item-form',
  templateUrl: './courses-item-form.component.html',
  styleUrls: ['./courses-item-form.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesItemFormComponent implements OnInit {
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
    private router: Router,
    private store$: Store<RootStoreState.State>
  ) {}

  ngOnInit(): void {
    this.title = this.isEditForm ? 'Edit course' : 'New course';
  }

  setDuration(duration): void {
    this.form.length = duration;
  }

  setCreationDate(creationDate): void {
    this.form.date = creationDate;
  }

  save(form): void {
    this.form.name = form.value.title;
    this.form.description = form.value.description;

    if (this.isEditForm) {
      this.form.id = this.courseItem.id;
      this.form.isTopRated = this.courseItem.isTopRated;
      this.form.authors = this.courseItem.authors;

      this.store$.dispatch(new CourseItemStoreActions.CourseItemUpdateAction({form: this.form}));
    } else {
      this.store$.dispatch(new CourseItemStoreActions.CourseItemCreateAction({form: this.form}));
    }
  }
}
