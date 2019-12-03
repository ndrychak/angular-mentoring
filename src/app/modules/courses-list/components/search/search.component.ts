import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CoursesService} from '../../../../core/services/courses/courses.service';

@Component({
  selector: 'agm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SearchComponent {
  searchText: string;

  constructor(private coursesService: CoursesService) { }

  findCourse(): void {
    this.coursesService.filterCourses(this.searchText);
  }
}
