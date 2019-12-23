import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {RootStoreState, UserStoreActions, UserStoreSelectors} from '@core/store';

@Component({
  selector: 'agm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
  public userInfo$;

  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {
    this.userInfo$ = this.store$.select(UserStoreSelectors.selectUserInfo);
  }

  logout() {
    this.store$.dispatch(new UserStoreActions.LogOutAction());
  }
}
