import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {CoursesStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('Courses', featureReducer),
    EffectsModule.forFeature([CoursesStoreEffects])
  ],
  providers: [CoursesStoreEffects]
})
export class CoursesStoreModule {}
