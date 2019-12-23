import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {IUser} from '../../models/user';

const getUserInfo = (state: State): any => state.userInfo;
const getToken = (state: State): any => state.token;
const isAuthenticated = (state: State): boolean => state.isAuthenticated;

export const selectUserState: MemoizedSelector<object, State> = createFeatureSelector<State>('User');

export const selectUserInfo: MemoizedSelector<object, IUser> = createSelector(selectUserState, getUserInfo);
export const selectToken: MemoizedSelector<object, string> = createSelector(selectUserState, getToken);
export const selectIsAuthenticated: MemoizedSelector<object, boolean> = createSelector(selectUserState, isAuthenticated);
