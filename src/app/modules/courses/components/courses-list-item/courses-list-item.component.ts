import {Component, Input, OnInit} from '@angular/core';
import {ICoursesListItem} from '../../models/courses-list-item';

@Component({
  selector: 'agm-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.sass']
})

export class CoursesListItemComponent implements OnInit {
  @Input() coursesListItem: ICoursesListItem;

  constructor() { }

  ngOnInit() { }

}
