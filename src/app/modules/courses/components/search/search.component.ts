import { Component } from '@angular/core';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'agm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
})

export class SearchComponent {
  searchText: string;

  constructor(private coursesService: CoursesService) { }

  findCourse(): void {
    this.coursesService.filterCourses(this.searchText);
  }
}
