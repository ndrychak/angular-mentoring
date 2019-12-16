import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ICoursesListItem} from '../../../modules/courses-list/models/courses-list-item';

import {INewCourse} from '../../../modules/add-course/models/new-course';
import {environment} from '../../../../environments/environment';

@Injectable()

export class CoursesService {
  public coursesList$ = new Subject<{courses: ICoursesListItem[]; resetPageCounter?: boolean}>();
  private textFragment: string;

  constructor(private http: HttpClient) { }

  getList(page: number = 0): Observable<ICoursesListItem[]> {
    const ITEMS_PER_PAGE = 3;
    const startAt = page * ITEMS_PER_PAGE;
    let params = new HttpParams();

    params = params.append('start', startAt.toString());
    params = params.append('count', ITEMS_PER_PAGE.toString());
    params = params.append('sort', 'date');

    if (this.textFragment) {
      params = params.append('textFragment', this.textFragment);
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

  removeItem(courseId: number) {
    return this.deleteItem(courseId).subscribe(() => {
      this.getList().subscribe(courses => {
        this.coursesList$.next({
          courses,
          resetPageCounter: true
        });
      });
    });
  }

  filterCourses(textFragment: string) {
    this.textFragment = textFragment;

    this.getList().subscribe(courses => {
      this.coursesList$.next({
        courses,
        resetPageCounter: true
      });
    });
  }
}
