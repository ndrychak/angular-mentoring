import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {ICoursesListItem} from '@core/models/courses-list-item';
import {CourseItemStoreActions, RootStoreState} from '@core/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'agm-courses-item-form',
  templateUrl: './courses-item-form.component.html',
  styleUrls: ['./courses-item-form.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesItemFormComponent implements OnInit, OnChanges {
  @Input() courseItem: ICoursesListItem;
  @Input() isEditForm: boolean;

  public title: string;
  public form: FormGroup;

  constructor(
    private router: Router,
    private store$: Store<RootStoreState.State>,
    private formBuilder: FormBuilder,
    public translate: TranslateService
  ) {}

  ngOnChanges(): void {
    if (this.form && this.courseItem) {
      this.form.setValue({
        name: this.courseItem.name,
        description: this.courseItem.description,
        length: this.courseItem.length,
        date: this.courseItem.date,
        authors: this.courseItem.authors,
        isTopRated: false,
        id: this.courseItem.id
      });
    }
  }

  set _courseItem(data: ICoursesListItem) {
    this.courseItem = data;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      length: null,
      date: null,
      authors: [],
      isTopRated: false,
      id: null
    });

    this.translate.get(this.isEditForm ? 'COURSE.EDIT_COURSE' : 'COURSE.NEW_COURSE').subscribe(res => {
      this.title = res;
    });

    this.translate.onLangChange.subscribe(event => {
      this.title = event.translations.COURSE[this.isEditForm ? 'EDIT_COURSE' : 'NEW_COURSE'];
    });
  }

  save(): void {
    if (this.isEditForm) {
      this.store$.dispatch(new CourseItemStoreActions.CourseItemUpdateAction({form: this.form.value}));
    } else {
      this.store$.dispatch(new CourseItemStoreActions.CourseItemCreateAction({form: this.form.value}));
    }
  }
}
