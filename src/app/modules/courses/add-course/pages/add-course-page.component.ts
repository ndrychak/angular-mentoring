import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {ICoursesListItem} from '../../courses-list/models/courses-list-item';

import {CoursesService} from '../../courses.service';

@Component({
  selector: 'agm-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddCoursePageComponent implements OnInit {
  courseItem$: Observable<ICoursesListItem>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (routeParams.id) {
        this.courseItem$ = this.coursesService.getCourseById();
      }
    });
  }
}
