import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {CourseItemStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('CourseItem', featureReducer),
    EffectsModule.forFeature([CourseItemStoreEffects])
  ],
  providers: [CourseItemStoreEffects]
})
export class CourseItemStoreModule {}
