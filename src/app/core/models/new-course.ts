import {IAuthor} from '@core/models/author';

export interface INewCourse {
  id?: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: IAuthor[];
  isTopRated: boolean;
}
