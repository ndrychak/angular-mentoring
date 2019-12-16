import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {AuthService} from '../../services/authentication/authentication.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    if (this.authService.isAuthenticated()) {
      return of(true);
    } else {
      this.router.navigateByUrl('/login');

      return of(false);
    }
  }
}
