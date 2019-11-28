import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Observable} from 'rxjs';

import {ICoursesListItem} from '../../models/courses-list-item';

import {CoursesService} from '../../../courses.service';

import {DeleteCoursePopupComponent} from '../delete-course-popup/delete-course-popup.component';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListComponent implements OnInit {
  currentCourses$: Observable<ICoursesListItem[]>;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.coursesService.getList().subscribe((data) => {
      this.coursesService.storeList(data);
    });

    this.currentCourses$ = this.coursesService.coursesList$;
  }

  onDeletedCourse(data: ICoursesListItem): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '395px';
    dialogConfig.minHeight = 210;
    dialogConfig.panelClass = 'agm-popup';
    dialogConfig.data = {
      id: data.id,
      title: data.title
    };

    const dialogRef = this.dialog.open(DeleteCoursePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(courseData => {
      if (courseData && courseData.deleteCourseId) {
        this.coursesService.removeItem(courseData.deleteCourseId);
      }
    });
  }
}
