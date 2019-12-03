import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

const components = [
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, IconSpriteModule],
  declarations: [...components],
  exports: [...components],
})
export class ComponentsModule { }
