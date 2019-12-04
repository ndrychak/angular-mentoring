import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {AddCoursePageComponent} from './pages/add-course-page.component';
import {CoursesItemFormComponent} from './components/courses-item-form/courses-item-form.component';
import {DurationInputComponent} from './components/duration-input/duration-input.component';
import {DateInputComponent} from './components/date-input/date-input.component';

import {CoursesService} from '../../core/services/courses/courses.service';

import {routes} from './add-course.routing';

import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    CoursesItemFormComponent,
    DurationInputComponent,
    DateInputComponent
  ],
  providers: [
    CoursesService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconSpriteModule,
    RouterModule.forChild(routes),
    SharedModule,
    CoreModule
  ],
  exports: [
    AddCoursePageComponent
  ]
})

export class AddCourseModule { }
