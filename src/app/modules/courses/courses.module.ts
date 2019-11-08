import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';
import { CoursesPageComponent } from './pages/courses-page.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { DurationPipe } from '../../shared/pipes/duration.pipe';
import { OrderByPipe } from '../../shared/pipes/order-by.pipe';

import { HighlightDirective } from '../../shared/directives/highlight.directive';

import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    SearchComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    DurationPipe,
    OrderByPipe,
    BreadcrumbsComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'})
  ],
  providers: [CoursesService],
  exports: [
    CoursesPageComponent
  ]
})

export class CoursesModule { }
