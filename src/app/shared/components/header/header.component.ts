import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {AuthService} from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'agm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
  isAuthenticatedUser$: Observable<boolean>;
  username: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuthenticatedUser$ = this.authService.isAuthenticated$;
    this.isAuthenticatedUser$.subscribe(isAuth => this.renderUsernameInfo(isAuth));
  }

  renderUsernameInfo(isAuth) {
    if (isAuth) {
      const userInfo = this.authService.getUserInfo();
      this.username = `${userInfo.firstName} ${userInfo.lastName}`;
    }
  }

  logout() {
    this.authService.logout();
  }
}
