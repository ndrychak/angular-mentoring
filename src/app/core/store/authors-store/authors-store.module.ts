import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AuthorsStoreEffects} from './effects';
import {featureReducer} from './reducer';

@NgModule({
  imports: [
    StoreModule.forFeature('Authors', featureReducer),
    EffectsModule.forFeature([AuthorsStoreEffects])
  ],
  providers: [AuthorsStoreEffects]
})
export class AuthorsStoreModule {}
