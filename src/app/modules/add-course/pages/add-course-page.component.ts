import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ICoursesListItem} from '../../courses-list/models/courses-list-item';

import {CoursesService} from '../../../core/services/courses/courses.service';

@Component({
  selector: 'agm-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCoursePageComponent implements OnInit {
  courseItem: ICoursesListItem;
  isEditForm: boolean;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (routeParams.courseId) {
        this.coursesService.getItem(Number(routeParams.courseId)).subscribe(course => {
          this.courseItem = course;
          this.isEditForm = routeParams.courseId;

          this.cd.markForCheck();
        });
      }
    });
  }
}
