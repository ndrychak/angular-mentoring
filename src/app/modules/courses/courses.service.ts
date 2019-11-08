import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CoursesService {
  private filterValue = new BehaviorSubject<string>('');
  public filterState = this.filterValue.asObservable();

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get('assets/mocks/courses.json');
  }

  setFilterValue(value: string) {
    this.filterValue.next(value);
  }
}
