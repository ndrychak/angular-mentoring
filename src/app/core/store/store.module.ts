import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {UserStoreModule} from './user-store';
import {CoursesStoreModule} from './courses-store';
import {CourseItemStoreModule} from './course-item-store';
import {AuthorsStoreModule} from './authors-store';

import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    UserStoreModule,
    CourseItemStoreModule,
    CoursesStoreModule,
    AuthorsStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: []
})
export class RootStoreModule {}
