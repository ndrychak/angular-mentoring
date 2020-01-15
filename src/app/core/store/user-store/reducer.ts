import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoginFailed: false
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isLoginFailed: null,
        isAuthenticated: true
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoginFailed: true,
        isAuthenticated: false
      };
    case ActionTypes.USER_INFO_RECEIVED:
      return {
        ...state,
        userInfo: action.payload.userInfo
      };
    case ActionTypes.LOGOUT:
      return initialState;
    default: {
      const token = localStorage.getItem('token');
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));

      return {
        ...state,
        isAuthenticated: !!token,
        token: token || null,
        userInfo: userInfo || null
      };
    }
  }
}
