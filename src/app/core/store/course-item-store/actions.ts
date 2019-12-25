import {Action} from '@ngrx/store';

import {ICoursesListItem} from '../../models/courses-list-item';
import {INewCourse} from '@core/models/new-course';

export enum ActionTypes {
  COURSE_ITEM_REQUEST = '[COURSE_ITEM] course item request',
  COURSE_ITEM_LOADED = '[COURSE_ITEM] course item loaded',
  COURSE_ITEM_UPDATE = '[COURSE_ITEM] course item update',
  COURSE_ITEM_CREATE = '[COURSE_ITEM] course item create'
}

export class CourseItemRequestAction implements Action {
  readonly type = ActionTypes.COURSE_ITEM_REQUEST;
  constructor(public payload: { courseId: number; }) {}
}

export class CourseItemLoadedAction implements Action {
  readonly type = ActionTypes.COURSE_ITEM_LOADED;
  constructor(public payload: { courseItem: ICoursesListItem }) {}
}

export class CourseItemUpdateAction implements Action {
  readonly type = ActionTypes.COURSE_ITEM_UPDATE;
  constructor(public payload: { form: INewCourse }) {}
}

export class CourseItemCreateAction implements Action {
  readonly type = ActionTypes.COURSE_ITEM_CREATE;
  constructor(public payload: { form: INewCourse }) {}
}

export type Actions =
  CourseItemRequestAction |
  CourseItemLoadedAction |
  CourseItemUpdateAction |
  CourseItemCreateAction;
