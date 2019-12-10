import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AuthService} from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'agm-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent {

  constructor(private authService: AuthService) { }

  loginUser(form) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }
}
