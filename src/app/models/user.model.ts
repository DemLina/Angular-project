import { Friend } from './friend.model';

export interface User {
  email: string;
  age: number;
  name: string;
  friends: Friend[];
  games: string[];
}
