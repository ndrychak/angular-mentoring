import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.COURSE_ITEM_LOADED:
      return {
        ...state,
        courseItem: action.payload.courseItem
      };
    default: {
      return state;
    }
  }
}
