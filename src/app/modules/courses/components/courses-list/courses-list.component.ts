import { Component, OnInit } from '@angular/core';
import { ICoursesListItem } from '../../models/courses-list-item';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.styl']
})

export class CoursesListComponent implements OnInit {
  coursesList: ICoursesListItem[] = [];

  constructor() { }

  ngOnInit() {
    this.coursesList = [{
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: new Date('2019-08-15T13:45:30'),
      duration: 88,
      description: 'Learn about where you can find course descriptions, what information ' +
        'they include, how they work, and details about various components of a course ' +
        'description. Course descriptions report information about a university or ' +
        'college\'s classes. They\'re published both in course catalogs that outline ' +
        'degree requirements and in course schedules that contain descriptions for all ' +
        'courses offered during a particular semester.'
    }, {
      id: 2,
      title: 'Video Course 2. Name tag',
      creationDate: new Date('2019-08-15T13:45:30'),
      duration: 28,
      description: 'Learn about where you can find course descriptions, what information ' +
        'they include, how they work, and details about various components of a course ' +
        'description. Course descriptions report information about a university or ' +
        'college\'s classes. They\'re published both in course catalogs that outline ' +
        'degree requirements and in course schedules that contain descriptions for all ' +
        'courses offered during a particular semester.'
    }, {
      id: 3,
      title: 'Video Course 3. Name tag',
      creationDate: new Date('2019-08-15T13:45:30'),
      duration: 60,
      description: 'Learn about where you can find course descriptions, what information ' +
        'they include, how they work, and details about various components of a course ' +
        'description. Course descriptions report information about a university or ' +
        'college\'s classes. They\'re published both in course catalogs that outline ' +
        'degree requirements and in course schedules that contain descriptions for all ' +
        'courses offered during a particular semester.'
    }];
  }

  loadMoreCourses(): void {
    console.log('load more courses');
  }

  onDeletedCourse(courseId): void {
    console.log(`delete: courseId = ${courseId}`);
  }
}
