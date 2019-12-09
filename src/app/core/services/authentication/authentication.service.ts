import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  isAuthenticated$ = new Observable<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.isAuthenticated$ = this.authSubject.asObservable();
  }

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

    this.requestUserInfo().subscribe(userInfo => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));

      this.authSubject.next(this.isAuthenticated());

      this.router.navigateByUrl('/courses');
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');

    this.authSubject.next(this.isAuthenticated());

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
