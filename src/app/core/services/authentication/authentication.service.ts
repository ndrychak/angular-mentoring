import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  public isAuthenticated$ = new BehaviorSubject<boolean>(this.isAuthenticated());

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(data: {email: string; password: string}) {
    this.http
      .post(environment.URLS.LOGIN, {login: data.email, password: data.password})
      .subscribe(
        (res: {token: string}) => this.successfulLogin(res.token),
        (error => console.log('login error', error))
      );
  }

  successfulLogin(token: string) {
    localStorage.setItem('token', token);

    this.requestUserInfo().subscribe((userInfo: {id; login; name: {first; last}}) => {
      localStorage.setItem('userInfo', JSON.stringify({
        login: userInfo.login,
        id: userInfo.id,
        firstName: userInfo.name.first,
        lastName: userInfo.name.last
      }));

      this.isAuthenticated$.next(this.isAuthenticated());

      this.router.navigateByUrl('/courses');
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');

    this.isAuthenticated$.next(this.isAuthenticated());

    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  requestUserInfo() {
    return this.http.post(environment.URLS.USER_INFO, {token: localStorage.getItem('token')});
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }
}
