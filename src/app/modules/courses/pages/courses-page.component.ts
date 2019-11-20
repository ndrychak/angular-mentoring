import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoursesService } from '../courses.service';
import { AuthService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'agm-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.styl']
})

export class CoursesPageComponent implements OnInit {

  constructor(
    private coursesService: CoursesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/login');
    }
  }

  addCourse() {
    this.coursesService.createItem();
  }
}
