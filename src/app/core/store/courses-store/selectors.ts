import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {ICoursesListItem} from '../../models/courses-list-item';

const getCoursesList = (state: State): any => state.coursesList;
const getCurrentPage = (state: State): any => state.page;
const getFilterValue = (state: State): any => state.filterBy;

export const selectCoursesState: MemoizedSelector<object, State> = createFeatureSelector<State>('Courses');

export const selectCoursesList: MemoizedSelector<object, ICoursesListItem[]> = createSelector(selectCoursesState, getCoursesList);
export const selectCurrentPage: MemoizedSelector<object, number> = createSelector(selectCoursesState, getCurrentPage);
export const selectFilterValue: MemoizedSelector<object, string> = createSelector(selectCoursesState, getFilterValue);
