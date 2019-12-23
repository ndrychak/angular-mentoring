import {HttpHandler, HttpInterceptor, HttpRequest, HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import {RootStoreState, UserStoreSelectors} from '../store';
import {first, flatMap} from 'rxjs/operators';

@Injectable()

export class TokenInterceptor implements HttpInterceptor {

  constructor(private store$: Store<RootStoreState.State>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store$.select(UserStoreSelectors.selectToken)
      .pipe(
        first(),
        flatMap(token => {
          const authReq = !!token ? req.clone({setHeaders: { Authorization: 'Token ' + token }}) : req;

          return next.handle(authReq);
        }),
      );
  }
}
