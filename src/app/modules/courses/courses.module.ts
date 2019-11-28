import { NgModule } from '@angular/core';

import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { CoursesDetailsComponent } from './pages/courses-details/courses-details.component';
import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { DeleteCoursePopupComponent } from './components/delete-course-popup/delete-course-popup.component';
import { CoursesItemFormComponent } from './components/courses-item-form/courses-item-form.component';
import { CourseDurationInputComponent } from './components/course-duration-input/course-duration-input.component';
import { CourseDateInputComponent } from './components/course-date-input/course-date-input.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';

import { DurationPipe } from '../../core/pipes/duration/duration.pipe';
import { OrderByPipe } from '../../core/pipes/order-by/order-by.pipe';

import { FilterPipe } from '../../core/pipes/filter/filter.pipe';

import { HighlightDirective } from '../../core/directives/highlight/highlight.directive';

import { CoursesService } from './courses.service';

const components = [
  SearchComponent,
  CoursesListComponent,
  CoursesListItemComponent,
  BreadcrumbsComponent,
  DeleteCoursePopupComponent,
  CoursesItemFormComponent,
  CoursesPageComponent,
  CoursesDetailsComponent,
  CourseDurationInputComponent,
  CourseDateInputComponent
];

const pipes = [
  DurationPipe,
  OrderByPipe,
  FilterPipe,
];

const directives = [
  HighlightDirective
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'}),
    MatDialogModule,
    RouterModule
  ],
  providers: [
    FilterPipe,
    CoursesService
  ],
  exports: [
    CoursesPageComponent,
    CoursesDetailsComponent
  ],
  entryComponents: [
    DeleteCoursePopupComponent
  ]
})

export class CoursesModule { }
