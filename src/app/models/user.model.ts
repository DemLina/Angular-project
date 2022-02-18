import { Friend } from './friend.model';

export interface User {
  email: string;
  age: number | null;
  name: string;
  friends: Friend[];
  games: string[];
}
