import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {IAuthor} from '@core/models/author';

const getAuthors = (state: State): any => state.authors;

export const selectAuthorsState: MemoizedSelector<object, State> = createFeatureSelector<State>('Authors');

export const selectAuthors: MemoizedSelector<object, IAuthor[]> = createSelector(selectAuthorsState, getAuthors);
