import { NgModule } from '@angular/core';

import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CoursesModule } from './modules/courses/courses.module';
import { LoginModule } from './modules/login/login.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    LoginModule,
    IconSpriteModule.forRoot({path: 'assets/sprites/sprite.svg'}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
