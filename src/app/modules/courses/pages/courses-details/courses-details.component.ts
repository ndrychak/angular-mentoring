import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICoursesListItem } from '../../models/courses-list-item';

import { CoursesService } from '../../courses.service';

@Component({
  selector: 'agm-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.styl']
})

export class CoursesDetailsComponent implements OnInit {
  courseItem: ICoursesListItem;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      if (routeParams.id) {
        this.coursesService.getList().subscribe(data => {
          this.courseItem = this.coursesService.getItemById(data, Number(routeParams.id));
        });
      }
    });
  }
}
