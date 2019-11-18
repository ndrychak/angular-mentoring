import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  isAuthenticated$ = new Observable<boolean>();

  constructor(private router: Router) {
    this.isAuthenticated$ = this.authSubject.asObservable();
  }

  login(data: {email: string; password: string}) {
    localStorage.setItem('jwtToken', Math.random().toString(36));
    localStorage.setItem('userInfo', JSON.stringify({email: data.email, password: data.password}));

    this.authSubject.next(this.isAuthenticated());

    this.router.navigateByUrl('/courses');
  }

  logout() {
    console.log('AuthService logout:', this.getUserInfo());

    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userInfo');

    this.authSubject.next(this.isAuthenticated());

    this.router.navigateByUrl('/login');
  }

  isAuthenticated() {
    return !!(localStorage.getItem('userInfo') && localStorage.getItem('jwtToken'));
  }

  getUserInfo(): {email: string; password: string} {
    return JSON.parse(localStorage.getItem('userInfo'));
  }
}
