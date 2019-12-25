import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {pipe} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';

import * as featureActions from './actions';
import {CoursesService} from '../../services/courses/courses.service';
import {ICoursesListItem} from '../../models/courses-list-item';
import {CoursesStoreSelectors, CoursesStoreState} from '../index';

@Injectable()
export class CoursesStoreEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private store$: Store<CoursesStoreState.State>) {}

  @Effect()
  coursesRequestEffect$ = this.actions$.pipe(
    ofType<featureActions.CoursesRequestAction>(featureActions.ActionTypes.COURSES_REQUEST),
    withLatestFrom(
      this.store$.select(CoursesStoreSelectors.selectCurrentPage),
      this.store$.select(CoursesStoreSelectors.selectFilterValue)
    ),
    pipe(
      switchMap(([action, pageNumber, filterValue]) => {
          return this.coursesService
            .getList(pageNumber, filterValue)
            .pipe(
              map((data: ICoursesListItem[]) => {
                return new featureActions.CoursesLoadedAction({
                  coursesList: data,
                  resetList: pageNumber === 0
                });
              })
            );
        }
      )
    )
  );

  @Effect()
  courseDeleteEffect$ = this.actions$.pipe(
    ofType<featureActions.CourseDeleteAction>(featureActions.ActionTypes.COURSE_DELETE),
    switchMap((action) => {
      return this.coursesService
        .deleteItem(action.payload.courseId)
        .pipe(
          map(() => new featureActions.CoursesRequestAction({page: 0}))
        );
      }
    )
  );
}
