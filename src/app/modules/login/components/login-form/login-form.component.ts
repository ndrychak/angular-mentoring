import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from '../../../../core/services/authentication/authentication.service';

@Component({
  selector: 'agm-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginFormComponent {

  constructor(private authService: AuthService) { }

  loginUser(form) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }
}
