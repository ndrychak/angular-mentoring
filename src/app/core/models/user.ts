export interface IUser {
  id: number;
  login: string;
  name: {
    first: string;
    last: string;
  };
}
