import {ICoursesListItem} from '../../models/courses-list-item';

export interface State {
  coursesList: ICoursesListItem[] | [];
  page: number;
  filterBy: string;
}

export const initialState: State = {
  coursesList: [],
  page: 0,
  filterBy: ''
};
