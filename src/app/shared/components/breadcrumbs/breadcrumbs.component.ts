import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CoursesService} from '../../../modules/courses/courses.service';

@Component({
  selector: 'agm-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: Array<{title?: string; url?: string; dynamicCourseTitle?: boolean}>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routerParams => {
      this.route.data.subscribe(data => {
        if (routerParams.courseId) {
          this.setDynamicCourseTitle(data.breadcrumbs, routerParams.courseId);
        }

        this.breadcrumbs = data.breadcrumbs;
      });
    });
  }

  /**
   * find breadcrumb that needs dynamic title. request title. set title and refresh view
   */
  setDynamicCourseTitle(breadcrumbs, courseId) {
    breadcrumbs.forEach(breadcrumb => {
      if (breadcrumb.dynamicCourseTitle) {
        this.coursesService.getList().subscribe(coursesList => {
          breadcrumb.title = this.coursesService.getCourseById(coursesList, Number(courseId)).title;
          this.cd.markForCheck();
        });
      }
    });
  }
}
