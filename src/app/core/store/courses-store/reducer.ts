import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function featureReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.COURSES_REQUEST:
      return {
        ...state,
        filterBy: (action.payload && typeof action.payload.filterBy === 'string') ? action.payload.filterBy : state.filterBy,
        page: (action.payload && typeof action.payload.page === 'number') ? action.payload.page : state.page + 1
      };
    case ActionTypes.COURSES_LOADED:
      return {
        ...state,
        coursesList: action.payload.resetList ? action.payload.coursesList : [...state.coursesList, ...action.payload.coursesList],
      };
    case ActionTypes.COURSES_CLEAR:
      return initialState;
    default: {
      return state;
    }
  }
}
