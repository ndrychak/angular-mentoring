import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPageComponent } from './modules/courses/pages/courses-page/courses-page.component';
import { CoursesDetailsComponent } from './modules/courses/pages/courses-details/courses-details.component';
import { LoginPageComponent } from './modules/login/pages/login-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }, {
    path: 'courses',
    children: [
      {
        path: '',
        component: CoursesPageComponent
      },
      {
        path: 'add',
        component: CoursesDetailsComponent
      }, {
        path: 'edit/:id',
        component: CoursesDetailsComponent
      }
    ]
  }, {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
