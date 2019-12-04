import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {NotFoundPageComponent} from './pages/not-found-page.component';

import {routes} from './not-found.router';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    NotFoundPageComponent
  ]
})

export class NotFoundModule { }
