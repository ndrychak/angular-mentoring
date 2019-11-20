import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICoursesListItem } from './models/courses-list-item';
import { FilterPipe } from '../../core/pipes/filter/filter.pipe';

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

  getList() {
    this.http.get('assets/mocks/courses.json').subscribe((data: {coursesList: Array<ICoursesListItem>}) => {
      this.allCourses = data.coursesList;

      this.coursesListSubject.next(this.allCourses);
    });
  }

  createItem() {
    console.log('CoursesService: createItem');
  }

  updateItem(courseId: number): void {
    console.log(`CoursesService: updateItem ${courseId}`);
  }

  removeItem(courseId: number): void {
    this.allCourses = this.allCourses.filter(item => {
      return item.id !== courseId;
    });

    this.coursesListSubject.next(this.allCourses);
  }

  getItemById(courseId: number) {
    console.log(`CoursesService: getItemById ${courseId}`);
  }

  filterCourses(filterKey: string) {
    this.coursesListSubject.next(this.filterPipe.transform(this.allCourses, 'title', filterKey));
  }
}
