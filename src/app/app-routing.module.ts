import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

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
        loadChildren: () => import('./modules/courses-list/courses-list.module').then(mod => mod.CoursesListModule)
      },
      {
        path: 'new',
        loadChildren: () => import('./modules/add-course/add-course.module').then(mod => mod.AddCourseModule),
        data: {
          breadcrumb: {
            title: 'New Course'
          }
        }
      }, {
        path: ':courseId',
        loadChildren: () => import('./modules/add-course/add-course.module').then(mod => mod.AddCourseModule),
        data: {
          breadcrumb: {
            dynamicCourseTitle: true
          }
        }
      }
    ]
  }, {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule)
  }, {
    path: '**',
    loadChildren: () => import('./modules/not-found/not-found.module').then(mod => mod.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
