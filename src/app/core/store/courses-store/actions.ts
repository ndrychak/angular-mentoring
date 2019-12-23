import {Action} from '@ngrx/store';

import {ICoursesListItem} from '../../models/courses-list-item';

export enum ActionTypes {
  COURSES_REQUEST = '[COURSES_LIST] courses request',
  COURSES_LOADED = '[COURSES_LIST] courses loaded',
  COURSES_CLEAR = '[COURSES_LIST] clear',
  COURSE_DELETE = '[COURSES_LIST] course delete',
}

export class CoursesRequestAction implements Action {
  readonly type = ActionTypes.COURSES_REQUEST;
  constructor(public payload?: { page?: number; filterBy?: string }) {}
}

export class CoursesLoadedAction implements Action {
  readonly type = ActionTypes.COURSES_LOADED;
  constructor(public payload: { coursesList: ICoursesListItem[], resetList: boolean }) {}
}

export class CoursesClearAction implements Action {
  readonly type = ActionTypes.COURSES_CLEAR;
}

export class CourseDeleteAction implements Action {
  readonly type = ActionTypes.COURSE_DELETE;
  constructor(public payload: { courseId: number }) {}
}

export type Actions =
  CoursesRequestAction |
  CoursesLoadedAction |
  CourseDeleteAction |
  CoursesClearAction;
