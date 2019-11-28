import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {BreadcrumbsComponent} from '../../shared/components/breadcrumbs/breadcrumbs.component';

import {DurationPipe} from '../../core/pipes/duration/duration.pipe';

import {CoursesService} from './courses.service';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    DurationPipe
  ],
  providers: [
    CoursesService
  ],
  imports: [],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IconSpriteModule,

    BreadcrumbsComponent,

    DurationPipe
  ]
})

export class CoursesModule { }
