import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ICoursesListItem} from './courses-list/models/courses-list-item';
import {FilterPipe} from '../../core/pipes/filter/filter.pipe';

@Injectable()

export class CoursesService {
  private coursesListSubject = new Subject<ICoursesListItem[]>();
  private allCourses: ICoursesListItem[];

  coursesList$ = new Observable<ICoursesListItem[]>();

  constructor(
    private http: HttpClient,
    private filterPipe: FilterPipe
  ) {
    this.coursesList$ = this.coursesListSubject.asObservable();
  }

  getList(): Observable<ICoursesListItem[]> {
    return this.http.get<ICoursesListItem[]>('assets/mocks/courses.json');
  }

  getCourseById(coursesList: ICoursesListItem[], courseId: number): ICoursesListItem {
    return coursesList.filter(course => course.id === courseId)[0];
  }

  storeList(data) {
    this.allCourses = data;

    this.coursesListSubject.next(this.allCourses);
  }

  createItem(data: {
    title: string,
    description: string,
    creationDate: string,
    duration: number
  }) {
    console.log('CoursesService: createItem', data);
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

  filterCourses(filterKey: string) {
    this.coursesListSubject.next(this.filterPipe.transform(this.allCourses, 'title', filterKey));
  }
}
