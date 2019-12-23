import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {ICoursesListItem} from '../../models/courses-list-item';

const getCourseItem = (state: State): any => state.courseItem;

export const selectCourseItemState: MemoizedSelector<object, State> = createFeatureSelector<State>('CourseItem');

export const selectCourseItem: MemoizedSelector<object, ICoursesListItem> = createSelector(selectCourseItemState, getCourseItem);
