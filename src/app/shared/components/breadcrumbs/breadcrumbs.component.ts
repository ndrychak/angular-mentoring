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
    const breadcrumbs = [];

    this.route.pathFromRoot.forEach(item => { // get url data as tree
      if (item.snapshot.routeConfig && item.snapshot.routeConfig.data && item.snapshot.routeConfig.data.breadcrumbs) {
        item.snapshot.routeConfig.data.breadcrumbs.forEach(breadcrumb => {
          if (breadcrumb.dynamicCourseTitle) {
            breadcrumbs.push({
              title: ''
            });
            this.setDynamicCourseTitle(breadcrumbs, breadcrumbs.length - 1);
          } else {
            breadcrumbs.push({
              url: item.snapshot.routeConfig.path,
              title: breadcrumb.title
            });
          }
        });
      }
    });

    this.breadcrumbs = breadcrumbs;
  }

  /**
   * find breadcrumb that needs dynamic title. request title. set title and refresh view
   */
  setDynamicCourseTitle(breadcrumbs, itemIndex) {
    this.route.params.subscribe(routerParams => {
      if (routerParams.courseId) {
          this.coursesService.getList().subscribe(coursesList => {
            breadcrumbs[itemIndex].title = this.coursesService.getCourseById(coursesList, Number(routerParams.courseId)).title;
            this.cd.markForCheck();
          });
      }
    });
  }
}
