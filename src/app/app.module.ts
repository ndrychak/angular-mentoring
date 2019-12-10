import {NgModule } from '@angular/core';
import {IconSpriteModule} from 'ng-svg-icon-sprite';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {CoursesListModule} from './modules/courses-list/courses-list.module';
import {AddCourseModule} from './modules/add-course/add-course.module';
import {LoginModule} from './modules/login/login.module';
import {SharedModule} from './shared/shared.module';
import {TokenInterceptorService} from './core/interceptors/token-http-interceptor.service';

const angularModules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'})
];

const customModules = [
  AppRoutingModule,
  SharedModule,
  CoursesListModule,
  AddCourseModule,
  LoginModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [...angularModules, ...customModules],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
