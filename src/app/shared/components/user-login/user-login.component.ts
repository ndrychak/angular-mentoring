import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'agm-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.sass']
})
export class UserLoginComponent implements OnInit {
  user: IUser;

  constructor() { }

  ngOnInit() {
  }

}
