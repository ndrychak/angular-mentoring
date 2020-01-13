import {IAuthor} from '@core/models/author';

export interface State {
  authors: IAuthor[];
}

export const initialState: State = {
  authors: []
};
