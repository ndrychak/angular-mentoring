import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './pages/login-page.component';

import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    LoginPageComponent,
  ]
})

export class LoginModule { }
