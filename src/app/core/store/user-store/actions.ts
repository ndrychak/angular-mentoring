import {Action} from '@ngrx/store';
import {IUser} from '../../models/user';

export enum ActionTypes {
  LOGIN_REQUEST = '[AUTH] login request',
  LOGIN_FAILURE = '[AUTH] login failed',
  LOGIN_SUCCESS = '[AUTH] login success',
  LOGOUT = '[AUTH] logout',
  USER_INFO_REQUEST = '[USER] info request',
  USER_INFO_RECEIVED = '[USER] info received'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { token: string }) {}
}

export class LogOutAction implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export class UserInfoRequestAction implements Action {
  readonly type = ActionTypes.USER_INFO_REQUEST;
  constructor(public payload: { token: string }) {}
}

export class UserInfoReceivedAction implements Action {
  readonly type = ActionTypes.USER_INFO_RECEIVED;
  constructor(public payload: { userInfo: IUser }) {}
}

export type Actions =
  LoginRequestAction |
  LoginFailureAction |
  LoginSuccessAction |
  LogOutAction |
  UserInfoRequestAction |
  UserInfoReceivedAction;
