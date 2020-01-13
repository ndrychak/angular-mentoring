import {Action} from '@ngrx/store';
import {IAuthor} from '@core/models/author';

export enum ActionTypes {
  AUTHORS_REQUEST = '[AUTHORS_REQUEST] authors get',
  AUTHORS_LOADED = '[AUTHORS_LOADED] authors loaded'
}

export class AuthorsRequestAction implements Action {
  readonly type = ActionTypes.AUTHORS_REQUEST;
}

export class AuthorsLoadedAction implements Action {
  readonly type = ActionTypes.AUTHORS_LOADED;
  constructor(public payload: { authors: IAuthor[]; }) {}
}


export type Actions = AuthorsRequestAction | AuthorsLoadedAction;
