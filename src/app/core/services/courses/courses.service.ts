import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ICoursesListItem} from '../../models/courses-list-item';

import {INewCourse} from '../../models/new-course';
import {environment} from '../../../../environments/environment';

@Injectable()

export class CoursesService {
  constructor(private http: HttpClient) { }

  getList(page: number = 0, filterByText): Observable<ICoursesListItem[]> {
    const ITEMS_PER_PAGE = 3;
    const startAt = page * ITEMS_PER_PAGE;
    let params = new HttpParams();

    params = params.append('start', startAt.toString());
    params = params.append('count', ITEMS_PER_PAGE.toString());
    params = params.append('sort', 'date');

    if (filterByText) {
      params = params.append('textFragment', filterByText);
    }

    return this.http.get<ICoursesListItem[]>(environment.URLS.COURSES, {params});
  }

  getItem(courseId: number) {
    return this.http.get<ICoursesListItem>(environment.URLS.COURSES + courseId);
  }

  createItem(course: INewCourse) {
    return this.http.post(environment.URLS.COURSES, course);
  }

  updateItem(course: INewCourse) {
    return this.http.patch(environment.URLS.COURSES + course.id, course);
  }

  deleteItem(courseId: number) {
    return this.http.delete(environment.URLS.COURSES + courseId);
  }
}
