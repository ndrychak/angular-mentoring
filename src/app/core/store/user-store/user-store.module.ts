import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {UserStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('User', featureReducer),
    EffectsModule.forFeature([UserStoreEffects])
  ],
  providers: [UserStoreEffects]
})
export class UserStoreModule {}
