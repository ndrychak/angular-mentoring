import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ICoursesListItem } from '../../models/courses-list-item';

import { DeleteCoursePopupComponent } from '../delete-course-popup/delete-course-popup.component';

import { CoursesService } from '../../courses.service';

@Component({
  selector: 'agm-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.styl']
})

export class CoursesListItemComponent {
  @Input() coursesListItem: ICoursesListItem;

  constructor(
    private coursesService: CoursesService,
    private dialog: MatDialog
  ) { }

  editCourse(): void {
    this.coursesService.updateItem(this.coursesListItem.id);
  }

  deleteButtonHandler(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '395px';
    dialogConfig.minHeight = 210;
    dialogConfig.panelClass = 'agm-popup';
    dialogConfig.data = {
      id: this.coursesListItem.id,
      title: this.coursesListItem.title
    };

    const dialogRef = this.dialog.open(DeleteCoursePopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data && data.deleteCourseId) {
        this.coursesService.removeItem(data.deleteCourseId);
      }
    });
  }
}
