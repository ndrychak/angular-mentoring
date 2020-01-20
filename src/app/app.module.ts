import {NgModule} from '@angular/core';
import {IconSpriteModule} from 'ng-svg-icon-sprite';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {CoursesListModule} from './modules/courses-list/courses-list.module';
import {AddCourseModule} from './modules/add-course/add-course.module';
import {LoginModule} from './modules/login/login.module';
import {SharedModule} from './shared/shared.module';
import {TokenInterceptor} from '@core/interceptors/token-http.interceptor';
import {LoaderService} from '@core/services/loader/loader.service';
import {LoaderInterceptor} from '@core/interceptors/loader.interceptor';
import {CoreModule} from '@core/core.module';

import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeRu);

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const angularModules = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'}),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
];

const customModules = [
  AppRoutingModule,
  SharedModule,
  CoursesListModule,
  AddCourseModule,
  LoginModule,
  CoreModule
];

@NgModule({
  declarations: [AppComponent],
  imports: [...angularModules, ...customModules],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
  },
    LoaderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
