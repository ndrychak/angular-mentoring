import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AuthService} from '../services/authentication/authentication.service';

@Injectable()

export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    let newHeaders = req.headers;

    if (token) {
      newHeaders = newHeaders.append('token', token);
    }

    const authReq = req.clone({headers: newHeaders});

    return next.handle(authReq);
  }
}
