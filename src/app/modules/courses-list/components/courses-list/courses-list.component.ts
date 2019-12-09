import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ICoursesListItem} from '../../models/courses-list-item';

import {CoursesService} from '../../../../core/services/courses/courses.service';

import {DeleteCoursePopupComponent} from '../delete-course-popup/delete-course-popup.component';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListComponent implements OnInit {
  private page: number;

  currentCourses = [];

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.page = 0;

    this.loadCourses();

    this.coursesService.coursesList$.subscribe(data => {
      this.currentCourses = data.courses;

      if (data.resetPageCounter) {
        this.page = 0;
      }

      this.cd.markForCheck();
    });
  }

  loadMore() {
    this.loadCourses(this.page);
  }

  loadCourses(page: number = 0) {
    this.coursesService.getList(page).subscribe(courses => {
      this.currentCourses = this.currentCourses.concat(courses);
      this.cd.markForCheck();
    });

    this.page++;
  }

  onDeletedCourse(data: ICoursesListItem): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '395px';
    dialogConfig.minHeight = 210;
    dialogConfig.panelClass = 'agm-popup';
    dialogConfig.data = {
      id: data.id,
      name: data.name
    };

    const dialogRef = this.dialog.open(DeleteCoursePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(courseData => {
      if (courseData && courseData.deleteCourseId) {
        this.coursesService.removeItem(courseData.deleteCourseId);
      }
    });
  }
}
