import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'agm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl']
})

export class LoginPageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/courses');
    }
  }
}
