import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {
  MatAutocompleteModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';

import {AddCoursePageComponent} from './pages/add-course-page.component';
import {CoursesItemFormComponent} from './components/courses-item-form/courses-item-form.component';
import {DurationInputComponent} from './components/duration-input/duration-input.component';
import {DateInputComponent} from './components/date-input/date-input.component';
import {AuthorsInputComponent} from './components/authors-input/authors-input.component';

import {CoursesService} from '@core/services/courses/courses.service';

import {routes} from './add-course.routing';

import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    CoursesItemFormComponent,
    DurationInputComponent,
    DateInputComponent,
    AuthorsInputComponent
  ],
  providers: [
    CoursesService,
    MatDatepickerModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconSpriteModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    TranslateModule
  ],
  exports: [
    AddCoursePageComponent
  ]
})

export class AddCourseModule { }
