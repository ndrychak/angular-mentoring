import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import * as featureActions from './actions';
import {AuthService} from '../../services/authentication/authentication.service';
import {IUser} from '../../models/user';

@Injectable()
export class UserStoreEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginRequestAction>(featureActions.ActionTypes.LOGIN_REQUEST),
    switchMap(action =>
      this.authService
        .login(action.payload.email, action.payload.password)
        .pipe(
          map((data: {token: string}) => new featureActions.LoginSuccessAction({ token: data.token })),
          catchError(() => of(new featureActions.LoginFailureAction()))
        )
    )
  );

  @Effect()
  loginSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginSuccessAction>(featureActions.ActionTypes.LOGIN_SUCCESS),
    switchMap(action =>
      this.authService
        .successfulLogin(action.payload.token)
        .pipe(
          map((token) => new featureActions.UserInfoRequestAction({ token }))
        )
    )
  );

  @Effect({ dispatch: false })
  loginFailEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginFailureAction>(featureActions.ActionTypes.LOGIN_FAILURE),
    tap((error: any) => {
      console.error('loginFailEffect$: ', error);
    })
  );

  @Effect({ dispatch: false })
  logOutEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LogOutAction>(featureActions.ActionTypes.LOGOUT),
    tap(() => this.authService.logout())
  );

  @Effect()
  userInfoRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.UserInfoRequestAction>(featureActions.ActionTypes.USER_INFO_REQUEST),
    switchMap(() =>
      this.authService
        .requestUserInfo()
        .pipe(
          map((data: IUser) => new featureActions.UserInfoReceivedAction({ userInfo: data }))
        )
    )
  );

  @Effect({ dispatch: false })
  userInfoReceivedEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.UserInfoReceivedAction>(featureActions.ActionTypes.USER_INFO_RECEIVED),
    tap((data: any) => this.authService.saveUserInfo(data.payload.userInfo))
  );
}
