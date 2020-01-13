import {IUser} from '../../models/user';

export interface State {
  token: string | null;
  userInfo: IUser | null;
  isAuthenticated: boolean;
  isLoginFailed: boolean;
}

export const initialState: State = {
  token: null,
  userInfo: null,
  isAuthenticated: false,
  isLoginFailed: false
};
