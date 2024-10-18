import { iTodos } from './i-todos';

export interface iUsers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  task?: iTodos[];
}
