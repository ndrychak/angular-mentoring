import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

import * as featureActions from './actions';
import {CoursesService} from '../../services/courses/courses.service';
import {ICoursesListItem} from '../../models/courses-list-item';

@Injectable()
export class CourseItemStoreEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}

  @Effect()
  courseItemRequestEffect$ = this.actions$.pipe(
    ofType<featureActions.CourseItemRequestAction>(featureActions.ActionTypes.COURSE_ITEM_REQUEST),
    switchMap((action) => {
        return this.coursesService
          .getItem(action.payload.courseId)
          .pipe(
            map((courseItem: ICoursesListItem) => {
              return new featureActions.CourseItemLoadedAction({courseItem});
            })
          );
      }
    )
  );

  @Effect({ dispatch: false })
  courseItemUpdateEffect$ = this.actions$.pipe(
    ofType<featureActions.CourseItemUpdateAction>(featureActions.ActionTypes.COURSE_ITEM_UPDATE),
    switchMap((action) => {
        return this.coursesService
          .updateItem(action.payload.form)
          .pipe(
            map(() => this.router.navigateByUrl('/courses'))
          );
      }
    )
  );

  @Effect({ dispatch: false })
  courseItemCreateEffect$ = this.actions$.pipe(
    ofType<featureActions.CourseItemCreateAction>(featureActions.ActionTypes.COURSE_ITEM_CREATE),
    switchMap((action) => {
        return this.coursesService
          .createItem(action.payload.form)
          .pipe(
            map(() => this.router.navigateByUrl('/courses'))
          );
      }
    )
  );
}
