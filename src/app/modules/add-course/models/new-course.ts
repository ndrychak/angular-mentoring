export interface INewCourse {
  id?: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: Array<any>; // @todo AUTHORSMODEL
  isTopRated: boolean;
}
