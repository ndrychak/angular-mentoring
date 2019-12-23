import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';

import {RootStoreState, UserStoreSelectors} from '../../store';
import {mergeMap, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private store$: Store<RootStoreState.State>,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.checkStoreAuthentication()
      .pipe(
        mergeMap(storeAuth => {
          if (storeAuth) {
            return of(true);
          } else {
            this.router.navigateByUrl('/login');

            return of(false);
          }
        })
      );
  }

  checkStoreAuthentication() {
    return this.store$.select(UserStoreSelectors.selectIsAuthenticated).pipe(take(1));
  }
}
