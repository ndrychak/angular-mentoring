import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesPageComponent} from './modules/courses/courses-list/pages/courses-page.component';
import {AddCoursePageComponent} from './modules/courses/add-course/pages/add-course-page.component';
import {LoginPageComponent} from './modules/login/pages/login-page.component';

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
        component: AddCoursePageComponent
      }, {
        path: 'edit/:id',
        component: AddCoursePageComponent
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
