import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {LoginPageComponent} from './pages/login-page.component';

import {routes} from './login.routing';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconSpriteModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    LoginPageComponent
  ]
})

export class LoginModule { }
