import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';

import * as featureActions from './actions';
import {CoursesService} from '../../services/courses/courses.service';
import {IAuthor} from '@core/models/author';

@Injectable()
export class AuthorsStoreEffects {
  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ) {}

  @Effect()
  authorsRequestEffect$ = this.actions$.pipe(
    ofType<featureActions.AuthorsRequestAction>(featureActions.ActionTypes.AUTHORS_REQUEST),
    switchMap((action) => {
        return this.coursesService
          .getAuthors()
          .pipe(
            map((authors: IAuthor[]) => {
              return new featureActions.AuthorsLoadedAction({authors});
            })
          );
      }
    )
  );
}
