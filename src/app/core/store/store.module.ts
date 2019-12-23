import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {UserStoreModule} from './user-store';
import {CoursesStoreModule} from './courses-store';
import {CourseItemStoreModule} from './course-item-store';

import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
    UserStoreModule,
    CourseItemStoreModule,
    CoursesStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class RootStoreModule {}
