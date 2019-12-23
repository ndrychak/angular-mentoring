import {ICoursesListItem} from '../../models/courses-list-item';

export interface State {
  courseItem: ICoursesListItem;
}

export const initialState: State = {
  courseItem: null
};
