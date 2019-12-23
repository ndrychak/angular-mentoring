import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {ICoursesListItem} from '@core/models/courses-list-item';
import {RootStoreState, CourseItemStoreActions, CourseItemStoreSelectors} from '@core/store';

@Component({
  selector: 'agm-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCoursePageComponent implements OnInit {
  public $courseItem: Observable<ICoursesListItem>;
  public isEditForm = false;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (routeParams.courseId) {
        this.store$.dispatch(new CourseItemStoreActions.CourseItemRequestAction({
          courseId: Number(routeParams.courseId)
        }));

        this.$courseItem = this.store$.select(CourseItemStoreSelectors.selectCourseItem);
        this.isEditForm = true;
      }
    });
  }
}
