import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CoursesPageComponent} from './modules/courses/courses-list/pages/courses-page.component';
import {AddCoursePageComponent} from './modules/courses/add-course/pages/add-course-page.component';
import {LoginPageComponent} from './modules/login/pages/login-page.component';
import {NotFoundPageComponent} from './modules/not-found/pages/not-found-page.component';

import {AuthGuard} from './core/guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  }, {
    path: 'courses',
    canActivate: [AuthGuard],
    data: {
      breadcrumb: {
        title: 'Courses'
      }
    },
    children: [
      {
        path: '',
        component: CoursesPageComponent
      },
      {
        path: 'new',
        component: AddCoursePageComponent,
        data: {
          breadcrumb: {
            title: 'New Course'
          }
        }
      }, {
        path: ':courseId',
        component: AddCoursePageComponent,
        data: {
          breadcrumb: {
            dynamicCourseTitle: true
          }
        }
      }
    ]
  }, {
    path: 'login',
    component: LoginPageComponent
  }, {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
