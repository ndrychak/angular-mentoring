import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {CoursesPageComponent} from './pages/courses-page.component';
import {SearchComponent} from './components/search/search.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {CoursesListItemComponent} from './components/courses-list-item/courses-list-item.component';
import {DeleteCoursePopupComponent} from './components/delete-course-popup/delete-course-popup.component';

import {routes} from './courses-list.routing';
import {CoursesService} from '../../core/services/courses/courses.service';

import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [
    SearchComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    DeleteCoursePopupComponent,
    CoursesPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconSpriteModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule
  ],
  providers: [
    CoursesService
  ],
  exports: [
    CoursesPageComponent
  ],
  entryComponents: [
    DeleteCoursePopupComponent
  ]
})

export class CoursesListModule { }
