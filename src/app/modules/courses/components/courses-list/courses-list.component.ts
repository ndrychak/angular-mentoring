import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../courses.service';

import { ICoursesListItem } from '../../models/courses-list-item';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.styl']
})

export class CoursesListComponent implements OnInit {
  currentCourses: Array<ICoursesListItem> = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getList();

    this.coursesService.coursesList$.subscribe(currentCourses => this.currentCourses = currentCourses);
  }

  loadMoreCourses(): void {
    console.log('load more courses');
  }
}
