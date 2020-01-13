import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {CourseItemStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('CourseItem', featureReducer),
    EffectsModule.forFeature([CourseItemStoreEffects])
  ],
  providers: [CourseItemStoreEffects]
})
export class CourseItemStoreModule {}
