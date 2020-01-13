import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {CoursesStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('Courses', featureReducer),
    EffectsModule.forFeature([CoursesStoreEffects])
  ],
  providers: [CoursesStoreEffects]
})
export class CoursesStoreModule {}
