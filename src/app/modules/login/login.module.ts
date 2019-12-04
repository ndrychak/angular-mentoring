import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {LoginPageComponent} from './pages/login-page.component';
import {LoginFormComponent} from './components/login-form/login-form.component';

import {routes} from './login.routing';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconSpriteModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginPageComponent,
  ]
})

export class LoginModule { }
