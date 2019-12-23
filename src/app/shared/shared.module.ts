import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PipesModule} from './pipes/pipes.module';
import {DirectivesModule} from './directives/directives.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, PipesModule, DirectivesModule],
  exports: [ComponentsModule, PipesModule, DirectivesModule]
})
export class SharedModule { }
