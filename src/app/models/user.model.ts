import { Friend } from './friend.model';
import { Game } from './game.model';

export interface User {
  email: string;
  age: number;
  name: string;
  friends: Friend[];
  games: Game[];
}
