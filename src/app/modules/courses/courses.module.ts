import { NgModule } from '@angular/core';

import { SearchComponent } from './components/search/search.component';
import { AddCourseButtonComponent } from './components/add-course-button/add-course-button.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';

import { CoursesPageComponent } from './pages/courses-page.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    SearchComponent,
    AddCourseButtonComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesPageComponent
  ]
})
export class CoursesModule { }
