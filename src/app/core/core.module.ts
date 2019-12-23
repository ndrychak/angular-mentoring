import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RootStoreModule} from './store';

@NgModule({
  imports: [CommonModule, RootStoreModule],
  declarations: [],
  exports: [RootStoreModule],
})

export class CoreModule { }
