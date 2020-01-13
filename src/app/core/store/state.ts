import {UserStoreState} from './user-store';
import {CoursesStoreState} from './courses-store';
import {CourseItemStoreState} from './course-item-store';
import {AuthorsStoreState} from '@core/store/authors-store';

export interface State {
  user: UserStoreState.State;
  courses: CoursesStoreState.State;
  courseItem: CourseItemStoreState.State;
  authors: AuthorsStoreState.State;
}
