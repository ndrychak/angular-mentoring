import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'agm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit, OnDestroy {
  private userState$;
  private username: string;
  private isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.userState$ = this.authService.isAuthenticated$.subscribe(isAuth => this.onUserStateChange(isAuth));
  }

  ngOnDestroy() {
    this.userState$.unsubscribe();
  }

  onUserStateChange(isAuth) {
    this.isAuthenticated = isAuth;

    this.setUsername();

    this.cd.markForCheck();
  }

  setUsername() {
    const userInfo = this.authService.getUserInfo();

    this.username = this.isAuthenticated ? `${userInfo.firstName} ${userInfo.lastName}` : '';
  }

  logout() {
    this.authService.logout();
  }
}
