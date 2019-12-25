import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../../environments/environment';
import {IUser} from '@core/models/user';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<object> {
    return this.http.post(environment.URLS.LOGIN, {login: email, password});
  }

  requestUserInfo(): Observable<object> {
    return this.http.post(environment.URLS.USER_INFO, {token: localStorage.getItem('token')});
  }

  successfulLogin(token: string): Observable<string> {
    localStorage.setItem('token', token);

    this.router.navigateByUrl('/courses');

    return of(token);
  }

  saveUserInfo(user: IUser): void {
    const preparedData = {
      login: user.login,
      id: user.id,
      name: {
        first: user.name.first,
        last: user.name.last
      }
    };

    localStorage.setItem('userInfo', JSON.stringify(preparedData));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');

    this.router.navigateByUrl('/login');
  }
}
