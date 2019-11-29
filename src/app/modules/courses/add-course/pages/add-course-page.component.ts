import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ICoursesListItem} from '../../courses-list/models/courses-list-item';

import {CoursesService} from '../../courses.service';

@Component({
  selector: 'agm-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCoursePageComponent implements OnInit {
  courseItem: ICoursesListItem;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (routeParams.courseId) {
        this.coursesService.getList().subscribe(coursesList => {
          this.courseItem = this.coursesService.getCourseById(coursesList, Number(routeParams.courseId));
          this.cd.markForCheck();
        });
      }
    });
  }
}
