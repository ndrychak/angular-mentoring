import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.AUTHORS_LOADED:
      return {
        ...state,
        authors: action.payload.authors
      };
    default: {
      return state;
    }
  }
}
