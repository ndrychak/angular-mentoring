import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {ICoursesListItem} from '@core/models/courses-list-item';
import {CoursesStoreActions, CoursesStoreSelectors, RootStoreState} from '@core/store';
import {DeleteCoursePopupComponent} from '../delete-course-popup/delete-course-popup.component';

@Component({
  selector: 'agm-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesListComponent implements OnInit, OnDestroy {
  public coursesList$: Observable<ICoursesListItem[]>;

  constructor(
    private dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private store$: Store<RootStoreState.State>
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(new CoursesStoreActions.CoursesRequestAction({
      page: 0
    }));

    this.coursesList$ = this.store$.select(CoursesStoreSelectors.selectCoursesList);
  }

  ngOnDestroy() {
    this.store$.dispatch(new CoursesStoreActions.CoursesClearAction());
  }

  loadMore(): void {
    this.store$.dispatch(new CoursesStoreActions.CoursesRequestAction());
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
        this.store$.dispatch(new CoursesStoreActions.CourseDeleteAction({
          courseId: courseData.deleteCourseId
        }));
      }
    });
  }
}
