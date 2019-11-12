import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICoursesListItem } from './models/courses-list-item';
import { FilterPipe } from '../../core/pipes/filter.pipe';

@Injectable()

export class CoursesService {
  private coursesListSubject = new Subject<Array<ICoursesListItem>>();

  coursesList$ = new Observable<Array<ICoursesListItem>>();
  allCourses: Array<ICoursesListItem>;

  constructor(
    private http: HttpClient,
    private filterPipe: FilterPipe
  ) {
    this.coursesList$ = this.coursesListSubject.asObservable();
  }

  getCourses() {
    this.http.get('assets/mocks/courses.json').subscribe((data: {coursesList: Array<ICoursesListItem>}) => {
      this.allCourses = data.coursesList;

      this.coursesListSubject.next(this.allCourses);
    });
  }

  filterCourses(filterKey: string) {
    this.coursesListSubject.next(this.filterPipe.transform(this.allCourses, 'title', filterKey));
  }
}
