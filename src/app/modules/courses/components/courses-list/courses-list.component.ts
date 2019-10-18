import { Component, OnInit } from '@angular/core';
import { ICoursesListItem } from '../../models/courses-list-item';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.sass']
})
export class CoursesListComponent implements OnInit {
  coursesList: ICoursesListItem[] = [];

  constructor() { }

  ngOnInit() {
    this.coursesList = [{
      id: 1,
      title: 'first title',
      creationDate: '11111',
      duration: 111,
      description: 'test description 1'
    }, {
      id: 2,
      title: 'second title',
      creationDate: '22222',
      duration: 22,
      description: 'test description 2'
    }];
  }

}
