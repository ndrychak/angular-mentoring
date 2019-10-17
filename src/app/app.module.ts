import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './modules/courses/courses.module';

// shared
import { HeaderComponent } from './shared/components/header/header.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { UserLoginComponent } from './shared/components/user-login/user-login.component';
import { UserLogoffComponent } from './shared/components/user-logoff/user-logoff.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    UserLoginComponent,
    UserLogoffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
