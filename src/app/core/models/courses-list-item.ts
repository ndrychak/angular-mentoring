export interface ICoursesListItem {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors: Array<any>; // @todo AUTHORSMODEL
}
