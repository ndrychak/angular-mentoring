import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'agm-delete-course-popup',
  templateUrl: './delete-course-popup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeleteCoursePopupComponent {
  id: number;
  title: string;

  constructor(
    private dialogRef: MatDialogRef<DeleteCoursePopupComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.title = data.title;
    this.id = data.id;
  }

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close({
      deleteCourseId: this.id
    });
  }
}
