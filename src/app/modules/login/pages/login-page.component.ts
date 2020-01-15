import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RootStoreState, UserStoreActions, UserStoreSelectors} from '@core/store';
import {Store} from '@ngrx/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'agm-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent implements OnInit {
  public loginForm: FormGroup;
  public error$: Observable<boolean>;

  constructor(
    private store$: Store<RootStoreState.State>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.error$ = this.store$.select(UserStoreSelectors.isLoginFailedSelect);
  }

  onFormSubmit() {
    if (this.loginForm.valid) {
      this.store$.dispatch(new UserStoreActions.LoginRequestAction({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }));
    }
  }
}
