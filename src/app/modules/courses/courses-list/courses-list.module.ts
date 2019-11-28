import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {CoursesModule} from '../courses.module';

import {CoursesPageComponent} from './pages/courses-page.component';
import {SearchComponent} from './components/search/search.component';
import {CoursesListComponent} from './components/courses-list/courses-list.component';
import {CoursesListItemComponent} from './components/courses-list-item/courses-list-item.component';
import {DeleteCoursePopupComponent} from './components/delete-course-popup/delete-course-popup.component';

import {OrderByPipe} from '../../../core/pipes/order-by/order-by.pipe';
import {FilterPipe} from '../../../core/pipes/filter/filter.pipe';

import {HighlightDirective} from '../../../core/directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    SearchComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    DeleteCoursePopupComponent,
    CoursesPageComponent,

    OrderByPipe,
    FilterPipe,

    HighlightDirective
  ],
  imports: [
    MatDialogModule,
    CoursesModule
  ],
  providers: [
    FilterPipe
  ],
  exports: [
    CoursesPageComponent
  ],
  entryComponents: [
    DeleteCoursePopupComponent
  ]
})

export class CoursesListModule { }
