import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-list-item/courses-list-item.component';

import { CoursesPageComponent } from './pages/courses-page.component';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { TimePipe } from '../../shared/pipes/time.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesPageComponent,
    TimePipe,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'})
  ],
  exports: [
    CoursesPageComponent
  ]
})

export class CoursesModule { }
