import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';

import {RootStoreState, UserStoreActions} from '@core/store';

@Component({
  selector: 'agm-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent {

  constructor(private store$: Store<RootStoreState.State>) { }

  loginUser(form) {
    const payload = {
      email: form.value.email,
      password: form.value.password
    };

    this.store$.dispatch(new UserStoreActions.LoginRequestAction(payload));
  }
}
