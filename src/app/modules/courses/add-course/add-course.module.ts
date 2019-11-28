import {NgModule} from '@angular/core';
import {CoursesModule} from '../courses.module';

import {AddCoursePageComponent} from './pages/add-course-page.component';
import {CoursesItemFormComponent} from './components/courses-item-form/courses-item-form.component';
import {DurationInputComponent} from './components/duration-input/duration-input.component';
import {DateInputComponent} from './components/date-input/date-input.component';

@NgModule({
  declarations: [
    AddCoursePageComponent,
    CoursesItemFormComponent,
    DurationInputComponent,
    DateInputComponent
  ],
  imports: [
    CoursesModule
  ],
  exports: [
    AddCoursePageComponent
  ]
})

export class AddCourseModule { }
