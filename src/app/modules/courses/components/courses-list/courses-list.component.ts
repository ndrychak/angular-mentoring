import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { ICoursesListItem } from '../../models/courses-list-item';
import { FilterPipe } from '../../../../shared/pipes/filter.pipe';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.styl'],
  providers: [ FilterPipe ]
})

export class CoursesListComponent implements OnInit {
  allCourses: ICoursesListItem[] = [];
  currentCourses: ICoursesListItem[] = [];

  constructor(
    private coursesService: CoursesService,
    private filterPipe: FilterPipe
  ) { }

  ngOnInit() {
    this.coursesService.getCourses().subscribe((data: {coursesList: Array<ICoursesListItem>}) => {
      this.allCourses = data.coursesList;
      this.currentCourses = this.allCourses;
    });

    this.coursesService.filterState.subscribe(val => this.filterCourses(val));
  }

  filterCourses(filterKey): void {
    this.currentCourses = this.filterPipe.transform(this.allCourses, 'title', filterKey);
  }

  loadMoreCourses(): void {
    console.log('load more courses');
  }

  onDeletedCourse(courseId): void {
    console.log(`delete: courseId = ${courseId}`);
  }
}
