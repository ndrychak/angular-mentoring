import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DurationPipe} from './duration/duration.pipe';
import {FilterPipe} from './filter/filter.pipe';
import {OrderByPipe} from './order-by/order-by.pipe';

const customPipes = [
  DurationPipe,
  FilterPipe,
  OrderByPipe
];

@NgModule({
  imports: [CommonModule],
  declarations: [...customPipes],
  exports: [...customPipes],
  providers: [FilterPipe]
})

export class PipesModule { }
