import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'agm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent {

  constructor() {}
}
